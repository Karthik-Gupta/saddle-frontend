import { BasicToken, TokensContext } from "../providers/TokensProvider"
import {
  useGaugeMinterContract,
  useLiquidityGaugeContract,
} from "./useContract"

import { BN_1E18 } from "../constants"
import { BigNumber } from "@ethersproject/bignumber"
import { ContractTransaction } from "ethers"
import { GaugeContext } from "../providers/GaugeProvider"
import { GaugeUserReward } from "../utils/gauges"
import { LiquidityGaugeV5 } from "../../types/ethers-contracts/LiquidityGaugeV5"
import { UserStateContext } from "../providers/UserStateProvider"
import { Zero } from "@ethersproject/constants"
import { formatUnits } from "ethers/lib/utils"
import { useActiveWeb3React } from "."
import { useContext } from "react"

type UserGauge = {
  stake: LiquidityGaugeV5["deposit(uint256)"]
  unstake: LiquidityGaugeV5["withdraw(uint256)"]
  claim: () => Promise<ContractTransaction[]>
  lpToken: BasicToken
  userWalletLpTokenBalance: BigNumber
  userStakedLpTokenBalance: BigNumber
  hasClaimableRewards: boolean
  userGaugeRewards: GaugeUserReward | null
  boost: string | null
}

export default function useUserGauge(gaugeAddress?: string): UserGauge | null {
  const { account } = useActiveWeb3React()
  const gaugeContract = useLiquidityGaugeContract(gaugeAddress)
  const gaugeMinterContract = useGaugeMinterContract()
  const { gauges } = useContext(GaugeContext)
  const tokens = useContext(TokensContext)
  const userState = useContext(UserStateContext)
  const gauge = Object.values(gauges).find(
    ({ address }) => address === gaugeAddress,
  )
  const lpToken = tokens?.[gauge?.lpTokenAddress ?? ""]

  if (
    !gaugeAddress ||
    !gaugeContract ||
    !gauge ||
    !lpToken ||
    !account ||
    !userState ||
    !gaugeMinterContract
  )
    return null

  const userGaugeRewards = userState.gaugeRewards?.[gaugeAddress]
  const hasSDLRewards = Boolean(userGaugeRewards?.claimableSDL.gt(Zero))
  const hasExternalRewards = Boolean(
    userGaugeRewards?.claimableExternalRewards.length,
  )

  const boost =
    gauge.gaugeBalance?.gt(Zero) && gauge.workingBalances?.gt(Zero)
      ? `${formatUnits(
          gauge.workingBalances
            .mul(BN_1E18)
            .div(gauge.gaugeBalance)
            .mul(BigNumber.from(25))
            .div(BigNumber.from(10)),
          18,
        )}x`
      : "-"

  return {
    stake: gaugeContract["deposit(uint256)"],
    unstake: gaugeContract["withdraw(uint256)"],
    claim: () => {
      const promises = [gaugeMinterContract.mint(gaugeAddress)]
      if (hasExternalRewards) {
        promises.push(gaugeContract["claim_rewards(address)"](account))
      }

      return Promise.all(promises)
    },
    hasClaimableRewards: hasSDLRewards || hasExternalRewards,
    lpToken,
    userWalletLpTokenBalance:
      userState.tokenBalances?.[lpToken.address] || Zero,
    userStakedLpTokenBalance: userGaugeRewards?.amountStaked || Zero,
    userGaugeRewards: userGaugeRewards || null,
    boost,
  }
}
