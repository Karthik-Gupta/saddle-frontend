import {
  injectedMetaMaskProvider,
  injectedTallyProvider,
  uauth,
  walletconnect,
  walletlink,
} from "../connectors"

import { AbstractConnector } from "@web3-react/abstract-connector"
import { BasicToken } from "../providers/TokensProvider"
import { BigNumber } from "@ethersproject/bignumber"
import coinbasewalletIcon from "../assets/icons/coinbasewallet.svg"
import metamaskIcon from "../assets/icons/metamask.svg"
import tallyIcon from "../assets/icons/tally.svg"
import unstoppableDomainsLogo from "../assets/icons/unstoppableDomainsLogo.png"
import walletconnectIcon from "../assets/icons/walletconnect.svg"

export const NetworkContextName = "NETWORK"
export const BTC_POOL_NAME = "BTC"
export const BTC_POOL_V2_NAME = "BTC V2"
export const EVMOS_BTC_POOL_NAME = "Evmos BTC"
export const STABLECOIN_POOL_NAME = "USD"
export const STABLECOIN_POOL_V2_NAME = "USDv2"
export const VETH2_POOL_NAME = "vETH2"
export const ALETH_POOL_NAME = "alETH"
export const D4_POOL_NAME = "D4"
export const SUSD_METAPOOL_NAME = "sUSD Meta"
export const SUSD_METAPOOL_V2_NAME = "sUSD Meta V2"
export const TBTC_METAPOOL_NAME = "tBTC Meta"
export const TBTC_METAPOOL_V2_NAME = "tBTC Meta V2"
export const WCUSD_METAPOOL_NAME = "wCUSD Meta"
export const WCUSD_METAPOOL_V2_NAME = "wCUSD Meta V2"
export const ARB_USD_POOL_NAME = "arbUSD"
export const USDS_ARB_USD_METAPOOL_NAME = "usds-arbUSDV2 Meta"
export const OPT_USD_POOL_NAME = "optUSD"
export const FRAX_OPT_USD_METAPOOL_NAME = "frax-optUSD"
export const FRAX_ARB_USD_POOL_V2_NAME = "arbUSDV2"
export const FTM_USD_POOL_NAME = "ftmUSD"
export const EVMOS_TESTNET_POOL_NAME = "evmosTestnetUSD"
export const EVMOS_POOL_NAME = "evmosUSD"
export const KAVA_TESTNET_USD_POOL_NAME = "kavaTestnetUSD"
export const KAVA_USD_POOL_NAME = "Saddle3Pool"
export const TBTC_EVMOS_BTC_METAPOOL_NAME = "tbtc-evmosBTC Meta"
export const EVMOS_4_POOL_NAME = "Evmos 4Pool"
export const EVMOS_FRAX_3_POOL_NAME = "Evmos Frax 3Pool"
export const FRAX_3_POOL_NAME = "Frax 3Pool"
export const TBTC_METAPOOL_V2_BTCV2_V3_NAME = "tBTCv2-BTCv2_v3"
export const WCUSD_METAPOOL_V2_USDV2_V3_NAME = "wcUSD-USDv2_v3"
export const SUSD_METAPOOL_V2_USDV2_V3_NAME = "sUSD-USDv2_v3"
export const FRAX_USDC_POOL_NAME = "FRAX-USDC-BP"
export const FRAX_USDT_METAPOOL_NAME = "FRAXBP-USDT"
export const FRAX_SUSD_METAPOOL_NAME = "FRAXBP-SUSD"
export const FRAX_ALUSD_METAPOOL_NAME = "FRAXBP-alUSD"
export const ARB_FRAX_USDS_METAPOOL_NAME = "arbFRAXBP-SUSD"
export const FTM_FRAX_USDT_METAPOOL_NAME = "ftmFRAXBP-USDT"
export const FTM_FRAX_ALUSD_METAPOOL_NAME = "ftmFRAXBP-alUSD"
export const FTM_FRAX_ALUSD_METAPOOL_DEPRECATED_NAME = "ftmFRAXBP-alUSD-old"
export const USDC_USX_POOL_NAME = "USDC-USX"
//Pulsechain base and meta pools
export const USD_POOL_NAME = "pascalUSD"
export const PULSE_CHAIN_POOL_NAME = "pulseChainUSD"
export const P_BTC_POOL_NAME = "pascalBTC"
export const ETH_POOL_NAME = "pascalETH"
export const FRAX_META_POOL_NAME = "pascalFrax-USD"
export const FEI_META_POOL_NAME = "pascalFEI-USD"
export const CST_META_POOL_NAME = "pascalCST-USD"
export const PXDC_META_POOL_NAME = "pascalPXDC-USD"
export const USDL_META_POOL_NAME = "pascalUSDL-USD"
export const TBTC_META_POOL_NAME = "pascalTBTC-BTC"
export const BUSD_META_POOL_NAME = "pascalBUSD-USD"

export type PoolName =
  | typeof BTC_POOL_NAME
  | typeof BTC_POOL_V2_NAME
  | typeof STABLECOIN_POOL_NAME
  | typeof STABLECOIN_POOL_V2_NAME
  | typeof VETH2_POOL_NAME
  | typeof ALETH_POOL_NAME
  | typeof D4_POOL_NAME
  | typeof SUSD_METAPOOL_NAME
  | typeof SUSD_METAPOOL_V2_NAME
  | typeof TBTC_METAPOOL_NAME
  | typeof TBTC_METAPOOL_V2_NAME
  | typeof WCUSD_METAPOOL_NAME
  | typeof WCUSD_METAPOOL_V2_NAME
  | typeof ARB_USD_POOL_NAME
  | typeof OPT_USD_POOL_NAME
  | typeof FRAX_OPT_USD_METAPOOL_NAME
  | typeof FRAX_ARB_USD_POOL_V2_NAME
  | typeof FTM_USD_POOL_NAME
  | typeof USDS_ARB_USD_METAPOOL_NAME
  | typeof EVMOS_TESTNET_POOL_NAME
  | typeof EVMOS_POOL_NAME
  | typeof KAVA_TESTNET_USD_POOL_NAME
  | typeof KAVA_USD_POOL_NAME
  | typeof TBTC_EVMOS_BTC_METAPOOL_NAME
  | typeof EVMOS_BTC_POOL_NAME
  | typeof EVMOS_4_POOL_NAME
  | typeof EVMOS_FRAX_3_POOL_NAME
  | typeof FRAX_3_POOL_NAME
  | typeof TBTC_METAPOOL_V2_BTCV2_V3_NAME
  | typeof WCUSD_METAPOOL_V2_USDV2_V3_NAME
  | typeof SUSD_METAPOOL_V2_USDV2_V3_NAME
  | typeof FRAX_USDC_POOL_NAME
  | typeof FRAX_USDT_METAPOOL_NAME
  | typeof FRAX_SUSD_METAPOOL_NAME
  | typeof FRAX_ALUSD_METAPOOL_NAME
  | typeof ARB_FRAX_USDS_METAPOOL_NAME
  | typeof FTM_FRAX_USDT_METAPOOL_NAME
  | typeof FTM_FRAX_ALUSD_METAPOOL_NAME
  | typeof USDC_USX_POOL_NAME
  | typeof FTM_FRAX_ALUSD_METAPOOL_DEPRECATED_NAME
  | typeof USD_POOL_NAME
  | typeof PULSE_CHAIN_POOL_NAME
  | typeof P_BTC_POOL_NAME
  | typeof ETH_POOL_NAME
  | typeof FRAX_META_POOL_NAME
  | typeof FEI_META_POOL_NAME
  | typeof CST_META_POOL_NAME
  | typeof PXDC_META_POOL_NAME
  | typeof USDL_META_POOL_NAME
  | typeof TBTC_META_POOL_NAME
  | typeof BUSD_META_POOL_NAME

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  HARDHAT = 31337,
  ARBITRUM = 42161,
  OPTIMISM = 10,
  FANTOM = 250,
  EVMOS = 9001,
  EVMOS_TESTNET = 9000,
  KAVA_TESTNET = 2221,
  KAVA = 2222,
  PULSECHAIN_TESTNET = 943,
}
export enum PoolTypes {
  BTC,
  ETH,
  USD,
  OTHER,
}
const buildAddresses = (
  addresses: Partial<Record<ChainId, string>>,
): Record<ChainId, string> => {
  return Object.keys(ChainId).reduce((acc, id) => {
    const numId = Number(id) as ChainId
    return { ...acc, [numId]: addresses?.[numId] || "" }
  }, {}) as Record<ChainId, string>
}
const buildPids = (
  pids: Partial<Record<ChainId, number>>,
): Record<ChainId, number | null> => {
  // @dev be careful to include pid 0 in this boolean logic
  return Object.keys(ChainId).reduce((acc, id) => {
    const numId = Number(id) as ChainId
    const pid = pids[numId]
    return { ...acc, [numId]: pid == null ? null : pid }
  }, {}) as Record<ChainId, number | null>
}

export class Token {
  readonly addresses: { [chainId in ChainId]: string }
  readonly decimals: number
  readonly symbol: string
  readonly name: string
  readonly geckoId: string
  readonly isSynthetic: boolean
  readonly isLPToken: boolean

  constructor(
    addresses: { [chainId in ChainId]: string },
    decimals: number,
    symbol: string,
    geckoId: string,
    name: string,
    isSynthetic = false,
    isLPToken = false,
  ) {
    this.addresses = addresses
    this.decimals = decimals
    this.symbol = symbol
    this.geckoId = geckoId
    this.name = name
    this.isSynthetic = isSynthetic
    this.isLPToken = isLPToken
  }
}

export const BLOCK_TIME = 13000 // ms

// TODO: Update with mainnet and ropsten addresses
export const PERMISSIONLESS_DEPLOYER_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xD5ac451B0c50B9476107823Af206eD814a2e2580",
  [ChainId.MAINNET]: "0x8f43fBDDc10b822AFA26812fB9058CA1fC22078F",
  [ChainId.ROPSTEN]: "",
})

export const MASTER_REGISTRY_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d",
  [ChainId.MAINNET]: "0xc5ad17b98D7fe73B6dD3b0df5b3040457E68C045",
  [ChainId.ROPSTEN]: "0xA287A3921AF80fB33E80897C6879DfFbA8527780",
  [ChainId.EVMOS]: "0xBa684B8E05415726Ee1fFE197eaf1b82E4d44418",
  [ChainId.FANTOM]: "0x7003102c75587E8D29c56124060463Ef319407D0",
  [ChainId.OPTIMISM]: "0x0E510c9b20a5D136E75f7FD2a5F344BD98f9d875",
  [ChainId.ARBITRUM]: "0xaB94A2c0D8F044AA439A5654f06b5797928396cF",
  [ChainId.KAVA]: "0x3A0c2A793a8DB779e0293699D0Ce77c77617FE0f",
  [ChainId.PULSECHAIN_TESTNET]: "0xDebFF2631B4C87C72b314b01400420d3725481Ad",
})

export const PSC_WPLS_PULSEX_LP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xB72Cfa111F92CD10D2A212963966AFb3F6c49970",
})

export const SYNTHETIX_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
})

export const SYNTHETIX_EXCHANGE_RATES_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xF68ECd50de7733015318361295547D8E939F93E6",
})

export const BRIDGE_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xa5bD85ed9fA27ba23BfB702989e7218E44fd4706",
})

export const MINICHEF_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x2B0d36FACD61B71CC05ab8F3D2355ec3631C0dd5",
  [ChainId.ARBITRUM]: "0x2069043d7556B1207a505eb459D18d908DF29b55",
  [ChainId.MAINNET]: "0x691ef79e40d909C715BE5e9e93738B3fF7D58534",
  [ChainId.EVMOS]: "0x0232e0b6df048c8CC4037c52Bc90cf943c9C8cC6",
  [ChainId.OPTIMISM]: "0x220d6bEedeA6a6317DaE19d39cd62EB7bb0ae5e4",
})

export const RETROACTIVE_VESTING_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xBEc49fA140aCaA83533fB00A2BB19bDdd0290f25",
  [ChainId.MAINNET]: "0x5DCA270671935cf3dF78bd8373C22BE250198a03",
})

export const SWAP_MIGRATOR_USD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x9cDeF6e33687F438808766fC133b2E9d1A16AD57",
  [ChainId.HARDHAT]: "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
})

export const GENERALIZED_SWAP_MIGRATOR_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x46866D274E6D9015c5FDc098CE270803e11e3eF4",
  [ChainId.HARDHAT]: "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB",
})

export const SUSD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0C8BAe14c9f9BF2c953997C881BEfaC7729FD314",
  [ChainId.HARDHAT]: "0x9d4454B023096f34B160D6B654540c56A1F81688",
})

export const SUSD_META_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x824dcD7b044D60df2e89B1bB888e66D8BCf41491",
  [ChainId.HARDHAT]: "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
})

export const SUSD_META_SWAP_V3_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x4568727f50c7246ded8C39214Ed6FF3c157f080D",
  [ChainId.HARDHAT]: "0xc96304e3c037f81dA488ed9dEa1D8F2a48278a75",
})

export const SUSD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x1e35ebF875f8A2185EDf22da02e7dBCa0F5558aB",
  [ChainId.HARDHAT]: "0x809d550fca64d94Bd9F66E60752A544199cfAC3D",
})

export const SUSD_META_SWAP_V2_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xc66Ed5d7800579220c71f21B1cCa2006B3a95900",
  [ChainId.HARDHAT]: "0xf433C50017d963b6082043445bCD0A54716DDC1d",
})

export const SUSD_META_SWAP_V3_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xB98fd1f66884cD5786b37cDE040B9f0cf763866f",
  [ChainId.HARDHAT]: "0x0948276A5430e954B42005575352eA69EBf8C72d",
})

export const FRAX_OPT_USD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.OPTIMISM]: "0x88Cc4aA0dd6Cf126b00C012dDa9f6F4fd9388b17",
})

export const USDS_ARB_USD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xDCA5b16A96f984ffb2A3022cfF339eb049126101",
})

export const TBTC_EVMOS_BTC_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0xFdA5D2ad8b6d3884AbB799DA66f57175E8706941",
})

export const TBTC_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xf74ebe6e5586275dc4CeD78F5DBEF31B1EfbE7a5",
  [ChainId.HARDHAT]: "0xA22D78bc37cE77FeE1c44F0C2C0d2524318570c3",
})

export const TBTC_META_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xA0b4a2667dD60d5CdD7EcFF1084F0CeB8dD84326",
  [ChainId.HARDHAT]: "0x6c8D53600C7f8F97ed32e6162867F3340dE3Ab37",
})

export const TBTC_META_SWAP_V3_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xfa9ED0309Bf79Eb84C847819F0B3CB84F6d351Af",
})

export const EVMOS_TBTC_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0xdb5c5A6162115Ce9a188E7D773C4D011F421BbE5",
})

export const TBTC_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xee1ec4e1C6e39C31dAaf3db2A62A397bdf3fe2f1",
  [ChainId.HARDHAT]: "0x0ed2E86FcE2e5A7965f59708c01f88a722BC7f07",
})

export const TBTC_META_SWAP_V2_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x05383312655856E25b851c15fA856dB7e270F0cF",
  [ChainId.HARDHAT]: "0xB06Ce7334A26e90077F0182F07aCF650Bc978936",
})

export const TBTC_META_SWAP_V3_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x4946DE721ce70D4B7aa226aA0Fe869C935769388",
})

export const WCUSD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x3F1d224557afA4365155ea77cE4BC32D5Dae2174",
  [ChainId.HARDHAT]: "0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f",
})

export const WCUSD_META_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xc02D481B52Ae04Ebc76a8882441cfAED45eb8342",
  [ChainId.HARDHAT]: "0x8D03623d799E93E53FeDf96aF88e2879bA1804FA",
})

export const WCUSD_META_SWAP_V3_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xB62222B941e9B652BE3632EEa062cb0ff66b1d1c",
})

export const WCUSD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x401AFbc31ad2A3Bc0eD8960d63eFcDEA749b4849",
  [ChainId.HARDHAT]: "0x922D6956C99E12DFeB3224DEA977D0939758A1Fe",
})

export const WCUSD_META_SWAP_V2_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x9898D87368DE0Bf1f10bbea8dE46c00cC3a2F9F1",
  [ChainId.HARDHAT]: "0xbc51860c89838ec548d7190657874556407423f4",
})

export const WCUSD_META_SWAP_V3_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x671D5942F901F5C60e4EbaD1c3bF284A4d28c675",
})

export const STABLECOIN_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x3911F80530595fBd01Ab1516Ab61255d75AEb066",
  [ChainId.ROPSTEN]: "0xbCED0cB1e8022869678d40b3c71FA7A443CA8090",
  [ChainId.HARDHAT]: "0x98A0Bc3f9FdAD482CB2e40dE1291f8b0A6FE1860",
})

export const STABLECOIN_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xaCb83E0633d6605c5001e2Ab59EF3C745547C8C7",
  [ChainId.HARDHAT]: "0xbf9fBFf01664500A33080Da5d437028b07DFcC55",
})

export const BTC_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e",
  [ChainId.ROPSTEN]: "0x02ad8Da8cCa3764DFb62d749E51Cb3d4b35643ad",
  [ChainId.HARDHAT]: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
})

export const BTC_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xdf3309771d2BF82cb2B6C56F9f5365C8bD97c4f2",
  [ChainId.ROPSTEN]: "", // TODO: add address after deployment
  [ChainId.HARDHAT]: "0x93b6BDa6a0813D808d75aA42e900664Ceb868bcF",
})

export const EVMOS_BTC_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x7003102c75587E8D29c56124060463Ef319407D0",
})

export const EVMOS_4_POOL_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x81272C5c573919eF0C719D6d63317a4629F161da",
})

export const EVMOS_FRAX_3_POOL_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x21d4365834B7c61447e142ef6bCf01136cBD01c6",
})

export const FRAX_3_POOL_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x8cAEa59f3Bf1F341f89c51607E4919841131e47a",
})

export const VETH2_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xdec2157831D6ABC3Ec328291119cc91B337272b5",
  [ChainId.ROPSTEN]: "0x2C019509326485AE234c6CA8a51c9F4A0F94f5fA",
  [ChainId.HARDHAT]: "0x6F62d12568c81Dc0fb38426B7Cdba2d265f89B29",
})

export const ALETH_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xa6018520EAACC06C30fF2e1B3ee2c7c22e64196a",
  [ChainId.ROPSTEN]: "0x53434526fCB7a5FF358AB74C13C1c582BBE6Ab9e",
  [ChainId.HARDHAT]: "0xCafac3dD18aC6c6e92c921884f9E4176737C052c",
})

export const D4_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC69DDcd4DFeF25D8a793241834d4cc4b3668EAD6",
  [ChainId.ROPSTEN]: "0xa5da0cB57830011c67Cb89e73582e7Bf0f49f81e",
  [ChainId.HARDHAT]: "0x9f1ac54BEF0DD2f6f3462EA0fa94fC62300d3a8e",
})

export const ARB_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xBea9F78090bDB9e662d8CB301A00ad09A5b756e9",
})

export const OPT_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.OPTIMISM]: "0x5847f8177221268d279Cf377D0E01aB3FD993628",
})

export const FTM_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0xBea9F78090bDB9e662d8CB301A00ad09A5b756e9",
})

export const EVMOS_TESTNET_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS_TESTNET]: "0x7264594dFB80a150f80b2988862605dDfda53727",
})

export const EVMOS_SWAP_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x1275203FB58Fc25bC6963B13C2a1ED1541563aF0",
})

export const FRAX_USDC_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x13Cc34Aa8037f722405285AD2C82FE570bfa2bdc",
  [ChainId.ARBITRUM]: "0x401AFbc31ad2A3Bc0eD8960d63eFcDEA749b4849",
  [ChainId.OPTIMISM]: "0xF6C2e0aDc659007Ba7c48446F5A4e4E94dfe08b5",
})

export const USDC_USX_SWAP_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x2bFf1B48CC01284416E681B099a0CDDCA0231d72",
})

export const KAVA_TESTNET_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.KAVA_TESTNET]: "0x02ad8Da8cCa3764DFb62d749E51Cb3d4b35643ad",
})

export const KAVA_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.KAVA]: "0xA500b0e1360462eF777804BCAe6CE2BfB524dD2e",
})

export const FRAX_OPT_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.OPTIMISM]: "0xc55E8C79e5A6c3216D4023769559D06fa9A7732e",
})

export const USDS_ARB_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0x5dD186f8809147F96D3ffC4508F3C82694E58c9c",
})

export const FRAX_ARB_USD_SWAP_V2_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xfeEa4D1BacB0519E8f952460A70719944fe56Ee0",
})

export const RETROACTIVE_SDL_MERKLETREE_DATA = buildAddresses({
  [ChainId.HARDHAT]: "hardhat.json",
})

export const SUSD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x8Fa31c1b33De16bf05c38AF20329f22D544aD64c",
  [ChainId.HARDHAT]: "0xBeaAFDA2E17fC95E69Dc06878039d274E0d2B21A",
})

export const SUSD_SWAP_TOKEN_V2_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xb6214a9d18f5Bf34A23a355114A03bE4f7D804fa",
  [ChainId.HARDHAT]: "0xb7c7142Cb2cBf105Eca46A00dDD0Fb3DD7698E8b",
})

export const SUSD_SWAP_TOKEN_V3_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x444F94460a641429CDa4e38E02E51642Cc38276A",
  [ChainId.HARDHAT]: "0x8e0BfED44D5B63812d0693FB248AfA1892dDc036",
})

export const STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x76204f8CFE8B95191A3d1CfA59E267EA65e06FAC",
  [ChainId.ROPSTEN]: "0x09f0e9d602c9989B2C03983cA37E7fa18084C44B",
  [ChainId.HARDHAT]: "0x6D1c89F08bbB35d80B6E6b6d58D2bEFE021eFE8d",
})

export const STABLECOIN_SWAP_V2_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x5f86558387293b6009d7896A61fcc86C17808D62",
  [ChainId.HARDHAT]: "0xC863F1F636fddce400E7515eCBDAbbEc4d1E0390",
})

export const WCUSD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x78179d49C13c4ECa14C69545ec172Ba0179EAE6B",
  [ChainId.HARDHAT]: "0x465Df401621060aE6330C13cA7A0baa2B0a9d66D",
})

export const FTM_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0xc969dD0A7AB0F8a0C5A69C0839dB39b6C928bC08",
})

export const EVMOS_TESTNET_4POOL_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses(
  {
    [ChainId.EVMOS_TESTNET]: "0x8adcB8A1Df1209554Be83F0F1c21EA54F9A9b18c",
  },
)

export const EVMOS_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x9c673F50CEe126FcC9F7378Ed46c33f5DEDEc0fC",
})

export const USDC_USX_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x1AE28a6ACA177c29b5773e91fbf74AfB0B7fE5C9",
})

export const FRAX_USDC_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x927E6f04609A45B107C789aF34BA90Ebbf479f7f",
  [ChainId.ARBITRUM]: "0x896935B02D3cBEb152192774e4F1991bb1D2ED3f",
  [ChainId.OPTIMISM]: "0xf74ebe6e5586275dc4CeD78F5DBEF31B1EfbE7a5",
})

export const FRAX_USDT_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x486DFCfdbF9025c062110E8c0344a15279aD0a85",
  [ChainId.ARBITRUM]: "0x166680852ae9Dec3d63374c5eBf89E974448BFE9",
  [ChainId.OPTIMISM]: "0xb63d7B0D835ca6eFf89ab774498ed6dD0D71e93e",
})

export const FRAX_USDT_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC765Cd3d015626244AD63B5FB63a97c5634643b9",
  [ChainId.ARBITRUM]: "0xf8504e92428d65E56e495684A38f679C1B1DC30b",
  [ChainId.OPTIMISM]: "0xa9a84238098Dc3d1529228E6c74dBE7EbdF117a5",
})

export const FRAX_USDT_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xAbf69CDE7B3725c12B8703005342EB5DD8a95D61",
  [ChainId.ARBITRUM]: "0xc8DFCFC329E19fDAF43a338aD6038dBA02a5079B",
  [ChainId.OPTIMISM]: "0x3F1d224557afA4365155ea77cE4BC32D5Dae2174",
})

export const FRAX_SUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x6Ac7a4cB3BFa90DC651CD53EB098e23c88d04e77",
  [ChainId.OPTIMISM]: "0x205c9B8c1fCa803B779b1eB4B887Aa0E00FE629F",
})

export const FRAX_SUSD_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x7D6c760cBde5a9Ad47510A86b9DCc58F9473CdD8",
  [ChainId.OPTIMISM]: "0xdf815Ea6b066Ac9f3107d8863a6c19aA2a5d24d3",
})

export const FRAX_SUSD_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x69baA0d7c2e864b74173922Ca069Ac79d3be1556",
  [ChainId.OPTIMISM]: "0x250184dDDEC6d38E28ac12B481c9016867226E9D",
})

export const FRAX_ALUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x3cF7b9479a01eeB3bbfC43581fa3bb21cd888e2A",
})

export const FRAX_ALUSD_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xe9154791883Df07e1328B636BCedfcCb80fefa38",
})

export const FRAX_ALUSD_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xFB516cF3710fC6901F2266aAEB8834cF5e4E9558",
})

export const ARB_FRAX_USDS_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0x1e491122f3C096392b40a4EA27aa1a29360d38a1",
})

export const ARB_FRAX_USDS_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES = buildAddresses(
  {
    [ChainId.ARBITRUM]: "0x1D434f50acf16BA013BE3536e9A3CDb5D7d4e694",
  },
)

export const ARB_FRAX_USDS_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xa5bD85ed9fA27ba23BfB702989e7218E44fd4706",
})

export const FTM_FRAX_USDT_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0x21EA072844fd4aBEd72539750c054E009D877f72",
})

export const FTM_FRAX_USDT_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES = buildAddresses(
  {
    [ChainId.FANTOM]: "0x4A5208F83A17E030a18830521E4064E80728c4FC",
  },
)

export const FTM_FRAX_USDT_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0xdb5c5A6162115Ce9a188E7D773C4D011F421BbE5",
})

export const FTM_FRAX_ALUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0xd7D1b50c8ef77d9aB410723f81363C8B252C729F",
})

export const FTM_FRAX_ALUSD_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES =
  buildAddresses({
    [ChainId.FANTOM]: "0x0E510c9b20a5D136E75f7FD2a5F344BD98f9d875",
  })

export const FTM_FRAX_ALUSD_METAPOOL_SWAP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.FANTOM]: "0x4E1484607760118ebE2Ab07C0c71f1B4D9671e01",
})

export const KAVA_TESTNET_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.KAVA_TESTNET]: "0x7546eC9bf608162117D9Ac6A3F7D50aaE9ea9E6B",
})

export const KAVA_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.KAVA]: "0x619535e015f0e46c5984a0B45FD71C0549F001Fc",
})

export const WCUSD_SWAP_TOKEN_V2_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x5F7872490a9B405946376dd40fCbDeF521F13e3f",
  [ChainId.HARDHAT]: "0x5c5baB00ef196517c81097dA095948317d458f21",
})

export const WCUSD_SWAP_TOKEN_V3_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0dB8b09c13FE21913faF463274cE8e0a51719f16",
})

export const ARB_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xc969dD0A7AB0F8a0C5A69C0839dB39b6C928bC08",
})

export const OPT_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.OPTIMISM]: "0xcCf860874cbF2d615192a4C4455580B4d622D3B9",
})

export const FRAX_OPT_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.OPTIMISM]: "0xfF5fa61Eb9b5cDD63bdFa16EF029d5313457925A",
})

export const USDS_ARB_USD_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xa815b134294580692482E321dD1A191aC1454192",
})

export const TBTC_EVMOS_BTC_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x21EA072844fd4aBEd72539750c054E009D877f72",
})

export const FRAX_ARB_USD_SWAP_V2_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0x0a20c2FFa10cD43F67D06170422505b7D6fC0953",
})

export const BTC_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC28DF698475dEC994BE00C9C9D8658A548e6304F",
  [ChainId.ROPSTEN]: "0x7546eC9bf608162117D9Ac6A3F7D50aaE9ea9E6B",
  [ChainId.HARDHAT]: "0x6F1216D1BFe15c98520CA1434FC1d9D57AC95321",
})

export const BTC_SWAP_V2_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xF32E91464ca18fc156aB97a697D6f8ae66Cd21a3",
  [ChainId.ROPSTEN]: "", // TODO: add address after deployment
  [ChainId.HARDHAT]: "0xbBc1b70e4e04486570bfB621194d4f901a906E8F",
})

export const EVMOS_BTC_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0xa6018520EAACC06C30fF2e1B3ee2c7c22e64196a",
})

export const EVMOS_4_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x9A34c72Bb85f0Da63578aC18047325E2a246f273",
})

export const EVMOS_FRAX_3_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS]: "0x2801fE8f9DE3a4aD6098a5B95d5165676bb01f82",
})

export const FRAX_3_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0785aDDf5F7334aDB7ec40cD785EBF39bfD91520",
})

export const TBTC_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x122Eca07139EB368245A29FB702c9ff11E9693B7",
  [ChainId.HARDHAT]: "0xf76070F44307a4B6649fEC2081cE4B4730c37C76",
})

export const TBTC_SWAP_TOKEN_V2_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x3f2f811605bC6D701c3Ad6E501be13461c560320",
  [ChainId.HARDHAT]: "0x1b1501C45aB5Ee45eE44a2360d53F9eb3316Ab66",
})

export const TBTC_SWAP_TOKEN_V3_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xA2E81Eb93F0F9814ae9A3bea2D2A63408f2709C1",
})

export const VETH2_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xe37E2a01feA778BC1717d72Bd9f018B6A6B241D5",
  [ChainId.ROPSTEN]: "0x28B465383ab829adFf02794917cD2FB8d04b0902",
  [ChainId.HARDHAT]: "0xd44a47B19a7862709588D574f39480f9C4DED1A6",
})

export const ALETH_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xc9da65931ABf0Ed1b74Ce5ad8c041C4220940368",
  [ChainId.ROPSTEN]: "0x13e0d50308C01cf5BdA4b64CcBCceF0C6B9710DF",
  [ChainId.HARDHAT]: "0xAe367415f4BDe0aDEE3e59C35221d259f517413E",
})

export const D4_SWAP_TOKEN_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xd48cF4D7FB0824CC8bAe055dF3092584d0a1726A",
  [ChainId.ROPSTEN]: "0xA2b37a2c1F5E523f867137D2394Da1AC2283f473",
  [ChainId.HARDHAT]: "0x2d2c18F63D2144161B38844dCd529124Fbb93cA2",
})

export const SDL_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x4EE6eCAD1c2Dae9f525404De8555724e3c35d07B",
  [ChainId.MAINNET]: "0xf1Dc500FdE233A4055e25e5BbF516372BC4F6871",
  [ChainId.ARBITRUM]: "0x75c9bc761d88f70156daf83aa010e84680baf131",
  [ChainId.OPTIMISM]: "0xa29b548056c3fd0f68bad9d4829ec4e66f22f796",
  [ChainId.EVMOS]: "0x3344e55C6DDE2A01F4ED893f97bAC1f99EC24f8B",
  [ChainId.FANTOM]: "",
  [ChainId.PULSECHAIN_TESTNET]: "0x50F771c990eBAC6fF20F8fb472600A7113321D7C",
})

export const PSC_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x50F771c990eBAC6fF20F8fb472600A7113321D7C",
})

export const VOTING_ESCROW_CONTRACT_ADDRESS = buildAddresses({
  [ChainId.HARDHAT]: "0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb",
  [ChainId.MAINNET]: "0xD2751CdBED54B87777E805be36670D7aeAe73bb2",
  [ChainId.PULSECHAIN_TESTNET]: "0x275ECf7a2DC6AEBAEf394F4C47eD431a5a850405",
})

export const FEE_DISTRIBUTOR_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8",
  [ChainId.MAINNET]: "0xabd040A92d29CDC59837e79651BB2979EA66ce04",
  [ChainId.PULSECHAIN_TESTNET]: "0xb558278d97E9D28A61E9048Bed1eFB103EaD4B1F",
})

export const GAUGE_MINTER_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xB82008565FdC7e44609fA118A4a681E92581e680",
  [ChainId.MAINNET]: "0x358fE82370a1B9aDaE2E3ad69D6cF9e503c96018",
  [ChainId.PULSECHAIN_TESTNET]: "0x4952E8278f1317F006dC350F8c1cD75341eeA958",
})

export const SPA_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0x5575552988A3A80504bBaeB1311674fCFd40aD4B",
})

export const GAUGE_HELPER_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A",
  [ChainId.MAINNET]: "0x8020E4134AD6a694AdbE9521a12C751e67CE9861",
  [ChainId.PULSECHAIN_TESTNET]: "0x57958669DE53371dC90B15787CF3E44c9523E4eb",
})

export const GAUGE_CONTROLLER_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x5fc748f1FEb28d7b76fa1c6B07D8ba2d5535177c",
  [ChainId.MAINNET]: "0x99Cb6c36816dE2131eF2626bb5dEF7E5cc8b9B14",
  [ChainId.PULSECHAIN_TESTNET]: "0x9B3f05211c95018D299424A576d6c90f47Bc96b6",
})

// Pulsechain
export const USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0bEA00Cb5d14f5A808aEeE571C84b499A62E6930",
})

export const USD_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xED2cC27B640096Ab71dBab3F1beEBb401Ca2Bce0",
})

export const PULSE_CHAIN_USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0e63a6727b44b3d1C22213a9B1C2A97195D2CeFE",
})

export const PULSE_CHAIN_USD_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x560F6b051107DE9904db06A17B7f69aC714f0720",
})

export const P_BTC_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x5e00de85B9F32e5f3De1d4c586D8805aa6c9B2c1",
})

export const P_BTC_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x27Ce54d86729e48539aD62BF7984D77Fec3aA48A",
})

export const ETH_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "",
})

export const ETH_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "",
})

export const FRAX_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x680B39c57b342B22e31B4F234Daf614f03AB4D19",
})

export const FRAX_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x5F7D09D393a6FeC07C7e1EFA054ef275E3F2161f",
})

export const FRAX_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x10708914Cc8f8aAEb900aDa3c45A367c5147FB6f",
})

export const FEI_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x95Af0D2Fd56B4194cF0839b6C2858A54cd9A2E46",
})

export const FEI_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xfC761ED6C738207fD1677853C78e84df2BAa0b93",
})

export const FEI_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xf150f28193C093532454d527360bB7Ff6c89E359",
})

export const CST_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x344e3237b7880fC0aB8c701B2535396E5023709B",
})

export const CST_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x59965cdA87246c4649632BB9E8CEf62e059Ba362",
})

export const CST_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xF1f72a3d87F0b4F4fD3a55F7cA56178fc096297b",
})

export const PXDC_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x2212555c2A4C58142eE7DECE9f79f37b0D8a3786",
})

export const PXDC_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xB1233D0A7E48f0c8dFd44bCC2A0b47Dd429C074F",
})

export const PXDC_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x107Ce7Cba1984b8d0Fb89e21c2d8129610Ffb589",
})

export const USDL_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x8Bd15d9fEDB3fEDbddB56EC90c189F4cd04437eA",
})

export const USDL_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x98329504c3EAd0a5d8dDD84A51a1E4E7F81673A8",
})

export const USDL_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xe20EA8501c4A96021d11E4684cd407e67b9A9756",
})

export const BUSD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x29A4fE471d3F130F5b4d01b7F3aAbBbFD1c59565",
})

export const BUSD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xA0F6a0333e68Fa8207fb173d5EEeB352fD9A6Fb7",
})

export const BUSD_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x3694b21A1Bc92E277317Cdf7aA6792610206dB31",
})

export const T_BTC_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x016819BFaD3703D9a5480FA716a6Fb8F395689A1",
})

export const T_BTC_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xfB5fd9FcDd0611A9a39Fd640eced9eF62dbA312c",
})

export const T_BTC_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x2F9CEcf89102729C2f9225771487176249a58B8C",
})

export const SPA = new Token(
  SPA_TOKEN_ADDRESSES,
  18,
  "SPA",
  "sperax",
  "Sperax",
  false,
  false,
)

export const SDL_TOKEN = new Token(
  SDL_TOKEN_ADDRESSES,
  18,
  "SDL",
  "saddle-finance", // Updated per CoinGecko
  "Saddle DAO",
  false,
  false,
)

export const PSC_TOKEN = new Token(
  PSC_TOKEN_ADDRESSES,
  18,
  "PSC",
  "pascal", // Updated per CoinGecko
  "Pascal DAO",
  false,
  false,
)

export const SUSD_SWAP_TOKEN = new Token(
  SUSD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleSUSD",
  "saddlesusd",
  "Saddle sUSD/saddleUSD-V2",
  false,
  true,
)

export const SUSD_SWAP_V2_TOKEN = new Token(
  SUSD_SWAP_TOKEN_V2_CONTRACT_ADDRESSES,
  18,
  "saddleSUSD-V2",
  "saddlesusd-v2",
  "Saddle sUSD/saddleUSD-V2 V2",
  false,
  true,
)

export const SUSD_SWAP_V2_V3_TOKEN = new Token(
  SUSD_SWAP_TOKEN_V3_CONTRACT_ADDRESSES,
  18,
  "saddleSUSD-V2-V3",
  "saddlesusd-v2-v3",
  "Saddle sUSD/saddleUSD-V2 V3",
  false,
  true,
)

export const BTC_SWAP_TOKEN = new Token(
  BTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleBTC",
  "saddlebtc",
  "Saddle TBTC/WBTC/RENBTC/SBTC",
  false,
  true,
)

export const BTC_SWAP_V2_TOKEN = new Token(
  BTC_SWAP_V2_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleBTC-V2",
  "saddlebtc-v2",
  "Saddle WBTC/RENBTC/SBTC",
  false,
  true,
)

export const EVMOS_BTC_SWAP_TOKEN = new Token(
  EVMOS_BTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleEvmosBTC",
  "saddleevmosbtc",
  "Saddle WBTC/RENBTC",
  false,
  true,
)

export const EVMOS_4_POOL_SWAP_TOKEN = new Token(
  EVMOS_4_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleEvmos4pool",
  "saddleevmos4pool",
  "Saddle 4pool",
  false,
  true,
)

export const EVMOS_FRAX_3_POOL_SWAP_TOKEN = new Token(
  EVMOS_FRAX_3_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleEvmosFrax3pool",
  "saddleevmosfrax3pool",
  "Saddle Frax 3pool",
  false,
  true,
)

export const FRAX_3_POOL_SWAP_TOKEN = new Token(
  FRAX_3_POOL_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleFrax3pool",
  "saddlefrax3pool",
  "Saddle 3pool",
  false,
  true,
)

export const TBTC_SWAP_TOKEN = new Token(
  TBTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddletBTC",
  "saddletBTC",
  "Saddle tBTCv2/saddleWRenSBTC",
  false,
  true,
)

export const TBTC_SWAP_V2_TOKEN = new Token(
  TBTC_SWAP_TOKEN_V2_CONTRACT_ADDRESSES,
  18,
  "saddletBTC-V2",
  "saddletBTC-v2",
  "Saddle tBTCv2/saddleWRenSBTC V2",
  false,
  true,
)

export const TBTC_SWAP_V3_TOKEN = new Token(
  TBTC_SWAP_TOKEN_V3_CONTRACT_ADDRESSES,
  18,
  "saddletBTC-V3",
  "saddletBTC-v3",
  "Saddle tBTCv2/saddleWRenSBTC V3",
  false,
  true,
)

export const STABLECOIN_SWAP_TOKEN = new Token(
  STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleUSD",
  "saddleusd",
  "Saddle DAI/USDC/USDT",
  false,
  true,
)

export const STABLECOIN_SWAP_V2_TOKEN = new Token(
  STABLECOIN_SWAP_V2_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleUSD-V2",
  "saddleusd-v2",
  "Saddle DAI/USDC/USDT V2",
  false,
  true,
)

export const WCUSD_SWAP_TOKEN = new Token(
  WCUSD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddlewCUSD",
  "saddlewcusd",
  "Saddle wCUSD/saddleUSD-V2",
  false,
  true,
)

export const WCUSD_SWAP_V2_TOKEN = new Token(
  WCUSD_SWAP_TOKEN_V2_CONTRACT_ADDRESSES,
  18,
  "saddlewCUSD-V2",
  "saddlewcusd-v2",
  "Saddle wCUSD/saddleUSD-V2 V2",
  false,
  true,
)

export const WCUSD_SWAP_V2_V3_TOKEN = new Token(
  WCUSD_SWAP_TOKEN_V3_CONTRACT_ADDRESSES,
  18,
  "saddlewCUSD-V2_V3",
  "saddlewcusd-v2-v3",
  "Saddle wCUSD/saddleUSD-V2 V3",
  false,
  true,
)

export const ARB_USD_SWAP_TOKEN = new Token(
  ARB_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleArbUSD",
  "saddlearbUSD",
  "Saddle nUSD/MIM/USDC/USDT",
  false,
  true,
)

export const FTM_USD_SWAP_TOKEN = new Token(
  FTM_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleFtmUSD",
  "saddleftmUSD",
  "Saddle FRAX/USDC",
  false,
  true,
)

export const EVMOS_TESTNET_SWAP_TOKEN = new Token(
  EVMOS_TESTNET_4POOL_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleEvmosUSD",
  "saddleevmosUSD",
  "Saddle EVMOS 4 Pool",
  false,
  true,
)

export const EVMOS_SWAP_TOKEN = new Token(
  EVMOS_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleEvmosUSD",
  "saddleevmosUSD",
  "Saddle DAI/USDC/USDT",
  false,
  true,
)

export const USDC_USX_SWAP_TOKEN = new Token(
  USDC_USX_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleUSX",
  "saddleusdcUSX",
  "Saddle USDC/USX LP Token",
  false,
  true,
)

export const FRAX_USDC_SWAP_TOKEN = new Token(
  FRAX_USDC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleFraxUSD",
  "saddlefraxUSD",
  "Saddle USDC/FRAX LP Token",
  false,
  true,
)

export const FRAX_USDT_METAPOOL_TOKEN = new Token(
  FRAX_USDT_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxUSDT",
  "saddlefraxusdtmetapool",
  "Saddle USDT/saddleFraxBP LP Token",
  false,
  true,
)

export const FRAX_SUSD_METAPOOL_TOKEN = new Token(
  FRAX_SUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxsUSD",
  "saddlefraxsusdmetapool",
  "Saddle sUSD/saddleFraxBP LP Token",
  true,
  true,
)

export const FRAX_ALUSD_METAPOOL_TOKEN = new Token(
  FRAX_ALUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxalUSD",
  "saddlefraxalusdmetapool",
  "Saddle alUSD/saddleFraxBP LP Token",
  false,
  true,
)

export const ARB_FRAX_USDS_METAPOOL_TOKEN = new Token(
  ARB_FRAX_USDS_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxUSDs",
  "saddlefraxusdsmetapool",
  "Saddle USDs/saddleFraxBP LP Token",
  false,
  true,
)

export const FTM_FRAX_USDT_METAPOOL_TOKEN = new Token(
  FTM_FRAX_USDT_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxUSDT",
  "saddlefraxusdtmetapool",
  "Saddle USDT/saddleFraxBP LP Token",
  false,
  true,
)

export const FTM_FRAX_ALUSD_METAPOOL_TOKEN = new Token(
  FTM_FRAX_ALUSD_METAPOOL_TOKEN_CONTRACT_ADDRESSES,
  18,
  "SaddleFraxalUSD",
  "saddlefraxalusdmetapool",
  "Saddle alUSD/saddleFraxBP LP Token",
  false,
  true,
)

export const KAVA_TESTNET_USD_SWAP_TOKEN = new Token(
  KAVA_TESTNET_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleKavaUSD",
  "saddlekavaUSD",
  "Saddle USDC/USDT",
  false,
  true,
)

export const KAVA_USD_SWAP_TOKEN = new Token(
  KAVA_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddle3Pool",
  "saddle3Pool",
  "Saddle USDC/USDT/DAI LP Token",
  false,
  true,
)

export const OPT_USD_SWAP_TOKEN = new Token(
  OPT_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleOptUSD",
  "saddleoptUSD",
  "Saddle DAI/USDC/USDT",
  false,
  true,
)

export const FRAX_OPT_USD_SWAP_TOKEN = new Token(
  FRAX_OPT_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "frax-saddleOptUSD",
  "frax-saddleoptUSD",
  "Saddle FRAX/saddleOptUsd",
  false,
  true,
)

export const USDS_ARB_USD_SWAP_TOKEN = new Token(
  USDS_ARB_USD_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "usds-saddleArbUSD",
  "usds-saddlearbUSD",
  "Saddle USDS/saddleArbUsd",
  false,
  true,
)

export const TBTC_EVMOS_BTC_SWAP_TOKEN = new Token(
  TBTC_EVMOS_BTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "tbtc-saddleEvmosBTC",
  "tbtc-saddleevmosBTC",
  "Saddle tBTCv2/saddleWRenBTC",
  false,
  true,
)

export const FRAX_ARB_USD_SWAP_V2_TOKEN = new Token(
  FRAX_ARB_USD_SWAP_V2_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleFraxArbUSD-V2",
  "saddlefraxarbUSD-v2",
  "Saddle FRAX/USDC/USDT",
  false,
  true,
)

export const VETH2_SWAP_TOKEN = new Token(
  VETH2_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleVETH2",
  "saddleveth2",
  "Saddle WETH/vETH2",
  false,
  true,
)

export const ALETH_SWAP_TOKEN = new Token(
  ALETH_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleALETH",
  "saddlealeth",
  "Saddle WETH/alETH/sETH",
  false,
  true,
)

export const D4_SWAP_TOKEN = new Token(
  D4_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "saddleD4",
  "saddled4",
  "Saddle alUSD/FEI/FRAX/LUSD",
  false,
  true,
)

// Pulsechain
export const USD_SWAP_TOKEN = new Token(
  USD_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalUSD",
  "pascalusd",
  "Pascal DAI/USDC/USDT",
  false,
  true,
)

export const PULSE_CHAIN_SWAP_TOKEN = new Token(
  PULSE_CHAIN_USD_SWAP_ADDRESSES,
  18,
  "pulsechainUSD",
  "pulsechainusd",
  "Pulsechain CST/PXDC/USDL",
  false,
  true,
)

export const P_BTC_SWAP_TOKEN = new Token(
  P_BTC_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalBTC",
  "pascalbtc",
  "Pascal WBTC/sBTC",
  false,
  true,
)

export const ETH_SWAP_TOKEN = new Token(
  ETH_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalETH",
  "pascaleth",
  "Pascal WETH/stETH",
  false,
  true,
)

export const FRAX_META_SWAP_TOKEN = new Token(
  FRAX_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalFrax-USD",
  "pascalfrax-usd",
  "Pascal FRAX/USD",
  false,
  true,
)

export const FEI_META_SWAP_TOKEN = new Token(
  FEI_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalFEI-USD",
  "pascalfei-usd",
  "Pascal FEI/USD",
  false,
  true,
)

export const CST_META_SWAP_TOKEN = new Token(
  CST_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalCST-USD",
  "pascalcst-usd",
  "Pascal CST/USD",
  false,
  true,
)

export const PXDC_META_SWAP_TOKEN = new Token(
  PXDC_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalPXDC-USD",
  "pascalpxdc-usd",
  "Pascal PXDC/USD",
  false,
  true,
)

export const USDL_META_SWAP_TOKEN = new Token(
  USDL_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalUSDL-USD",
  "pascalusdl-usd",
  "Pascal USDL/USD",
  false,
  true,
)

export const BUSD_META_SWAP_TOKEN = new Token(
  BUSD_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalBUSD-USD",
  "pascalbusd-usd",
  "Pascal BUSD/USD",
  false,
  true,
)

export const T_BTC_META_SWAP_TOKEN = new Token(
  T_BTC_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalTBTC-BTC",
  "pascaltbtc-btc",
  "Pascal TBTC/BTC",
  false,
  true,
)

// Stablecoins
const WCUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xad3e3fc59dff318beceaab7d00eb4f68b1ecf195",
  [ChainId.HARDHAT]: "0xFD471836031dc5108809D173A067e8486B9047A3",
})
export const WCUSD = new Token(
  WCUSD_CONTRACT_ADDRESSES,
  18,
  "wCUSD",
  "wrapped-celo-dollar",
  "Wrapped Celo USD",
)

const SUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
  [ChainId.HARDHAT]: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
  [ChainId.OPTIMISM]: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
})
export const SUSD = new Token(
  SUSD_CONTRACT_ADDRESSES,
  18,
  "sUSD",
  "nusd",
  "sUSD",
  true,
)

const CST_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x1B2f92EEa10B5abc8fD4E5eC7383F6E72eeC4476",
})

export const CST = new Token(
  CST_CONTRACT_ADDRESSES,
  18,
  "CST",
  "usd-coin",
  "CST",
)

const DAI_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  [ChainId.ROPSTEN]: "0x8C924e41d0624Ae6E7DB09fc93BBfB324c31BE0C",
  [ChainId.HARDHAT]: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
  [ChainId.OPTIMISM]: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  [ChainId.FANTOM]: "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e",
  [ChainId.EVMOS_TESTNET]: "0x6CE6BeeEDeFd2d83C1c6EC191ceBCE0317227852",
  [ChainId.EVMOS]: "0x63743ACF2c7cfee65A5E356A4C4A005b586fC7AA",
  [ChainId.KAVA]: "0x765277EebeCA2e31912C9946eAe1021199B39C61",
  [ChainId.PULSECHAIN_TESTNET]: "0x664FF1489C132439cD4E54853D0a20f2A4b34344",
})

const MAD_DAI_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS_TESTNET]: "0x6CE6BeeEDeFd2d83C1c6EC191ceBCE0317227852",
  [ChainId.EVMOS]: "0x63743ACF2c7cfee65A5E356A4C4A005b586fC7AA",
})

export const DAI = new Token(DAI_CONTRACT_ADDRESSES, 18, "DAI", "dai", "Dai")

export const MAD_DAI = new Token(
  MAD_DAI_CONTRACT_ADDRESSES,
  18,
  "DAI",
  "dai",
  "madDAI",
)

const USDC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  [ChainId.ROPSTEN]: "0xA4fe4981f7550884E7E6224F0c78245DC145b2F2",
  [ChainId.HARDHAT]: "0x9A676e781A523b5d0C0e43731313A708CB607508",
  [ChainId.ARBITRUM]: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
  [ChainId.OPTIMISM]: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
  [ChainId.FANTOM]: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
  [ChainId.EVMOS_TESTNET]: "0xF4cd157e54c7B658d7A4995d84372C3dc79D1755",
  [ChainId.EVMOS]: "0x51e44FfaD5C2B122C8b635671FCC8139dc636E82",
  [ChainId.KAVA_TESTNET]: "0x6CE6BeeEDeFd2d83C1c6EC191ceBCE0317227852",
  [ChainId.KAVA]: "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
  [ChainId.PULSECHAIN_TESTNET]: "0x5De40Acb65118A252b7bE7901aF74b6b32e5dE24",
})

export const USDC = new Token(
  USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "USDC Coin",
)

const MAD_USDC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS_TESTNET]: "0xF4cd157e54c7B658d7A4995d84372C3dc79D1755",
  [ChainId.EVMOS]: "0x51e44FfaD5C2B122C8b635671FCC8139dc636E82",
})

export const MAD_USDC = new Token(
  MAD_USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "madUSDC Coin",
)

const USDT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  [ChainId.ROPSTEN]: "0x0593d1b92e8Ba6bBC428923245891efF0311Fa15",
  [ChainId.HARDHAT]: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
  [ChainId.ARBITRUM]: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
  [ChainId.OPTIMISM]: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
  [ChainId.EVMOS_TESTNET]: "0x06545e8108090bA1E8448a66b65C62A8B862e7D1",
  [ChainId.EVMOS]: "0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e",
  [ChainId.KAVA_TESTNET]: "0xF4cd157e54c7B658d7A4995d84372C3dc79D1755",
  [ChainId.FANTOM]: "0x049d68029688eAbF473097a2fC38ef61633A3C7A",
  [ChainId.KAVA]: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
  [ChainId.PULSECHAIN_TESTNET]: "0xB619362631433B5c10A10062Bc58A0Cb4e39a9CD",
})

export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
)

const MAD_USDT_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS_TESTNET]: "0x06545e8108090bA1E8448a66b65C62A8B862e7D1",
  [ChainId.EVMOS]: "0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e",
})

export const MAD_USDT = new Token(
  MAD_USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "madTether",
)

const NUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0x2913e812cf0dcca30fb28e6cac3d2dcff4497688",
})
export const NUSD = new Token(
  NUSD_CONTRACT_ADDRESSES,
  18,
  "nUSD",
  "nusd",
  "nUSD",
)

const MIM_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
})
export const MIM = new Token(
  MIM_CONTRACT_ADDRESSES,
  18,
  "MIM",
  "magic-internet-money",
  "Magic Internet Money",
)

const FRAX_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
  [ChainId.ROPSTEN]: "0xb295E36469C8Aef7d76b661aD5af02cdB258D662",
  [ChainId.HARDHAT]: "0x851356ae760d987E095750cCeb3bC6014560891C",
  [ChainId.ARBITRUM]: "0x17fc002b466eec40dae837fc4be5c67993ddbd6f",
  [ChainId.OPTIMISM]: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
  [ChainId.FANTOM]: "0xdc301622e621166bd8e82f2ca0a26c13ad0be355",
  [ChainId.EVMOS]: "0xE03494D0033687543a80c9B1ca7D6237F2EA8BD8",
  [ChainId.PULSECHAIN_TESTNET]: "0xbBf58CCd7Cf395A0471C7771f2e8bA6B50B74Db3",
})

const USDS_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xd74f5255d557944cf7dd0e45ff521520002d5748",
})

export const FRAX = new Token(
  FRAX_CONTRACT_ADDRESSES,
  18,
  "FRAX",
  "frax",
  "Frax",
)

export const USDS = new Token(
  USDS_CONTRACT_ADDRESSES,
  18,
  "USDs",
  "sperax-usd",
  "USDs",
)

const UST_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.EVMOS_TESTNET]: "0xB3d39E511b33154A023a67a5C916FfBA0346Cdab",
})

export const UST = new Token(
  UST_CONTRACT_ADDRESSES,
  18,
  "UST",
  "terrausd",
  "TerraUSD",
)

const ALUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
  [ChainId.ROPSTEN]: "0x8b7a92FdbC77c6d8c61644D118c37D813B2069C4",
  [ChainId.HARDHAT]: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
  [ChainId.FANTOM]: "0xB67FA6deFCe4042070Eb1ae1511Dcd6dcc6a532E",
})
export const ALUSD = new Token(
  ALUSD_CONTRACT_ADDRESSES,
  18,
  "alUSD",
  "alchemix-usd",
  "Alchemix USD",
)

const USX_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0a5e677a6a24b2f1a2bf4f3bffc443231d2fdec8",
})
export const USX = new Token(
  USX_CONTRACT_ADDRESSES,
  18,
  "USX",
  "token-dforce-usd",
  "dForce USD",
)

// pulsechain
const USDL_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x6CEd88bC733170F21d83282F484541aE04c98a9d",
})
export const USDL = new Token(
  USDL_CONTRACT_ADDRESSES,
  18,
  "USDL",
  "usd-coin",
  "USDL",
)

const BUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x57BE669645f5107e9f068E6EA7526626b12A572E",
})
export const BUSD = new Token(
  BUSD_CONTRACT_ADDRESSES,
  18,
  "BUSD",
  "busd",
  "Binance USD",
)

const ST_ETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "",
})
export const STETH = new Token(
  ST_ETH_CONTRACT_ADDRESSES,
  18,
  "stETH",
  "steth",
  "Lido Staked ETH",
)

export const FRAX_ARB_USD_POOL_V2_TOKENS = [FRAX, USDC, USDT]
export const STABLECOIN_POOL_TOKENS = [DAI, USDC, USDT]
export const SUSD_POOL_TOKENS = [SUSD, ...STABLECOIN_POOL_TOKENS]
export const SUSD_UNDERLYING_POOL_TOKENS = [SUSD, STABLECOIN_SWAP_V2_TOKEN]
export const ARB_USD_POOL_TOKENS = [NUSD, MIM, USDC, USDT]
export const USDS_ARB_USD_POOL_TOKENS = [USDS, ...FRAX_ARB_USD_POOL_V2_TOKENS]
export const OPT_USD_POOL_TOKENS = [DAI, USDC, USDT]
export const FRAX_OPT_USD_POOL_TOKENS = [FRAX, ...OPT_USD_POOL_TOKENS]
export const FRAX_OPT_USD_UNDERLYING_POOL_TOKENS = [FRAX, OPT_USD_SWAP_TOKEN]
export const USDS_ARB_USD_UNDERLYING_POOL_TOKENS = [
  USDS,
  FRAX_ARB_USD_SWAP_V2_TOKEN,
]
export const FTM_USD_POOL_TOKENS = [FRAX, USDC]
export const EVMOS_TESTNET_POOL_TOKENS = [DAI, USDC, USDT, UST]
export const EVMOS_POOL_TOKENS = [DAI, USDC, USDT]
export const KAVA_TESTNET_USD_POOL_TOKENS = [USDC, USDT]
export const KAVA_USD_POOL_TOKENS = [USDC, USDT, DAI]

export const USDC_USX_POOL_TOKENS = [USDC, USX]

export const FRAX_USDC_POOL_TOKENS = [USDC, FRAX]
export const FRAX_USDT_UNDERLYING_POOL_TOKENS = [USDT, FRAX_USDC_SWAP_TOKEN]
export const FRAX_USDT_POOL_TOKENS = [USDT, ...FRAX_USDC_POOL_TOKENS]
export const FRAX_SUSD_UNDERLYING_POOL_TOKENS = [SUSD, FRAX_USDC_SWAP_TOKEN]
export const FRAX_SUSD_POOL_TOKENS = [SUSD, ...FRAX_USDC_POOL_TOKENS]
export const FRAX_ALUSD_UNDERLYING_POOL_TOKENS = [ALUSD, FRAX_USDC_SWAP_TOKEN]
export const FRAX_ALUSD_POOL_TOKENS = [ALUSD, ...FRAX_USDC_POOL_TOKENS]

export const FTM_FRAX_USDT_UNDERLYING_POOL_TOKENS = [USDT, FTM_USD_SWAP_TOKEN]
export const FTM_FRAX_USDT_POOL_TOKENS = [USDT, ...FTM_USD_POOL_TOKENS]
export const FTM_FRAX_ALUSD_UNDERLYING_POOL_TOKENS = [ALUSD, FTM_USD_SWAP_TOKEN]
export const FTM_FRAX_ALUSD_POOL_TOKENS = [ALUSD, ...FTM_USD_POOL_TOKENS]

export const ARB_FRAX_USDS_UNDERLYING_POOL_TOKENS = [USDS, FRAX_USDC_SWAP_TOKEN]
export const ARB_FRAX_USDS_POOL_TOKENS = [USDS, ...FRAX_USDC_POOL_TOKENS]

// Tokenized BTC
const TBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
  [ChainId.ROPSTEN]: "0x9F6aA48f852Dd928F53A7dd3dcd2AC96a76c8727",
  [ChainId.HARDHAT]: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  [ChainId.PULSECHAIN_TESTNET]: "0xF3d5E8394439ad94473f3008886126418a257819",
})
export const TBTC = new Token(
  TBTC_CONTRACT_ADDRESSES,
  18,
  "TBTC",
  "sbtc",
  "tBTC",
)

const TBTC_V2_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x18084fba666a33d37592fa2633fd49a74dd93a88",
  [ChainId.HARDHAT]: "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1",
  [ChainId.EVMOS]: "0x8d395AfFC1767141387ffF45aF88a074614E7Ccf",
})
export const TBTC_V2 = new Token(
  TBTC_V2_CONTRACT_ADDRESSES,
  18,
  "tBTC",
  "tbtc",
  "tBTCv2",
)

const WBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  [ChainId.ROPSTEN]: "0x7264594dFB80a150f80b2988862605dDfda53727",
  [ChainId.HARDHAT]: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  [ChainId.EVMOS]: "0xF80699Dc594e00aE7bA200c7533a07C1604A106D",
  [ChainId.PULSECHAIN_TESTNET]: "0xb00982846ED52D3e0109A907aeaAE7Be24F602DF",
})
export const WBTC = new Token(
  WBTC_CONTRACT_ADDRESSES,
  8,
  "WBTC",
  "wrapped-bitcoin",
  "WBTC",
)

const RENBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
  [ChainId.ROPSTEN]: "0x79B92D075d72d639D46D30CE15e6DdDE50ad5890",
  [ChainId.HARDHAT]: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
  [ChainId.EVMOS]: "0xb1a8C961385B01C3aA782fba73E151465445D319",
})
export const RENBTC = new Token(
  RENBTC_CONTRACT_ADDRESSES,
  8,
  "RENBTC",
  "renbtc",
  "renBTC",
)

const SBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
  [ChainId.ROPSTEN]: "0xAc2931cFA6ff57Aaf64B43DFdc5190ca3c341640",
  [ChainId.HARDHAT]: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
  [ChainId.PULSECHAIN_TESTNET]: "0x3d6597B4114568D7d8D696D7529667B468484B64",
})
export const SBTC = new Token(
  SBTC_CONTRACT_ADDRESSES,
  18,
  "SBTC", // TODO the mainnet symbol is sBTC but hardhat is SBTC
  "sbtc",
  "sBTC",
  true,
)

export const BTC_POOL_TOKENS = [TBTC, WBTC, RENBTC, SBTC]
export const BTC_POOL_V2_TOKENS = [WBTC, RENBTC, SBTC]

export const TBTC_POOL_TOKENS = [TBTC_V2, ...BTC_POOL_V2_TOKENS]
export const TBTC_UNDERLYING_POOL_TOKENS = [TBTC_V2, BTC_SWAP_V2_TOKEN]

export const EVMOS_BTC_POOL_TOKENS = [WBTC, RENBTC]
export const FRAX_3_POOL_TOKENS = [USDC, USDT, FRAX]
export const EVMOS_4_POOL_TOKENS = [MAD_DAI, MAD_USDC, MAD_USDT, FRAX]
export const EVMOS_FRAX_3_POOL_TOKENS = [MAD_USDC, MAD_USDT, FRAX]
export const TBTC_EVMOS_POOL_TOKENS = [TBTC_V2, ...EVMOS_BTC_POOL_TOKENS]
export const TBTC_EVMOS_UNDERLYING_POOL_TOKENS = [TBTC_V2, EVMOS_BTC_SWAP_TOKEN]

const WETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.ROPSTEN]: "0x0B68F3b6c7fc0b6dD4D9a2399C4AE35be060ba42",
  [ChainId.HARDHAT]: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
  [ChainId.PULSECHAIN_TESTNET]: "",
})
export const WETH = new Token(
  WETH_CONTRACT_ADDRESSES,
  18,
  "WETH",
  "ethereum",
  "WETH",
)

const VETH2_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x898BAD2774EB97cF6b94605677F43b41871410B1",
  [ChainId.ROPSTEN]: "0xd46Ea72ABf55699b17eAF529c6533e5c13F5E687",
  [ChainId.HARDHAT]: "0x59b670e9fA9D0A427751Af201D676719a970857b",
})
export const VETH2 = new Token(
  VETH2_CONTRACT_ADDRESSES,
  18,
  "VETH2",
  "ethereum",
  "vETH2",
)

export const VETH2_POOL_TOKENS = [WETH, VETH2]

const ALETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  [ChainId.ROPSTEN]: "0xaA91d3f2C53BDBEdd45FaB0308d0b51315Dc32E7",
  [ChainId.HARDHAT]: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
})
export const ALETH = new Token(
  ALETH_CONTRACT_ADDRESSES,
  18,
  "alETH",
  "alchemix-eth",
  "Alchemix ETH",
)

const SETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
  [ChainId.ROPSTEN]: "0x82BD6d2A185ed1C48e01830853fEf7f4D02fF1cC",
  [ChainId.HARDHAT]: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
})
export const SETH = new Token(
  SETH_CONTRACT_ADDRESSES,
  18,
  "sETH",
  "seth",
  "Synth sETH",
  true,
)

export const ALETH_POOL_TOKENS = [WETH, ALETH, SETH]

const LUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
  [ChainId.ROPSTEN]: "0x440d96e36f1A087deFdB5206b5e53DD2e526840B",
  [ChainId.HARDHAT]: "0x95401dc811bb5740090279Ba06cfA8fcF6113778",
})
export const LUSD = new Token(
  LUSD_CONTRACT_ADDRESSES,
  18,
  "LUSD",
  "liquity-usd",
  "Liquity USD",
)

const FEI_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  [ChainId.ROPSTEN]: "0x02020a3006587080a00d6675AFfACC99344521AC",
  [ChainId.HARDHAT]: "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9",
  [ChainId.PULSECHAIN_TESTNET]: "0x550Db2cDDB79236945a1c0A065D1bD4035bf45D0",
})
export const FEI = new Token(
  FEI_CONTRACT_ADDRESSES,
  18,
  "FEI",
  "usd-coin",
  "Fei Protocol",
)

const PXDC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xF1759bd517DcC2938043c55BfAAE096A7C7C24Fb",
})
export const PXDC = new Token(
  PXDC_CONTRACT_ADDRESSES,
  8,
  "PXDC",
  "usd-coin",
  "PXDC",
)

export const D4_POOL_TOKENS = [ALUSD, FEI, FRAX, LUSD]

export const WCUSD_POOL_TOKENS = [WCUSD, ...STABLECOIN_POOL_TOKENS]
export const WCUSD_UNDERLYING_POOL_TOKENS = [WCUSD, STABLECOIN_SWAP_V2_TOKEN]

// pulsechain
export const USD_POOL_TOKENS = [DAI, USDC, USDT]
export const PULSE_CHAIN_POOL_TOKENS = [CST, PXDC, USDL]
export const P_BTC_POOL_TOKENS = [WBTC, SBTC]
export const ETH_POOL_TOKENS = [WETH, STETH]

export const TBTC_BTC_POOL_TOKENS = [TBTC, ...P_BTC_POOL_TOKENS]
export const TBTC_BTC_UNDERLYING_POOL_TOKENS = [TBTC, P_BTC_SWAP_TOKEN]

export const FRAX_USD_POOL_TOKENS = [FRAX, ...USD_POOL_TOKENS]
export const FRAX_USD_UNDERLYING_POOL_TOKENS = [FRAX, USD_SWAP_TOKEN]
export const FEI_USD_POOL_TOKENS = [FEI, ...USD_POOL_TOKENS]
export const FEI_USD_UNDERLYING_POOL_TOKENS = [FEI, USD_SWAP_TOKEN]
export const CST_USD_POOL_TOKENS = [CST, ...USD_POOL_TOKENS]
export const CST_USD_UNDERLYING_POOL_TOKENS = [CST, USD_SWAP_TOKEN]
export const PXDC_USD_POOL_TOKENS = [PXDC, ...USD_POOL_TOKENS]
export const PXDC_USD_UNDERLYING_POOL_TOKENS = [PXDC, USD_SWAP_TOKEN]
export const USDL_USD_POOL_TOKENS = [USDL, ...USD_POOL_TOKENS]
export const USDL_USD_UNDERLYING_POOL_TOKENS = [USDL, USD_SWAP_TOKEN]
export const BUSD_USD_POOL_TOKENS = [BUSD, ...USD_POOL_TOKENS]
export const BUSD_USD_UNDERLYING_POOL_TOKENS = [BUSD, USD_SWAP_TOKEN]

export type Pool = {
  name: PoolName
  lpToken: Token
  poolTokens: Token[]
  isSynthetic: boolean
  addresses: { [chainId in ChainId]: string }
  type: PoolTypes
  route: string
  metaSwapAddresses?: { [chainId in ChainId]: string }
  underlyingPoolTokens?: Token[]
  underlyingPool?: PoolName
  isOutdated?: boolean // pool can be outdated but not have a migration target
  rewardPids: { [chainId in ChainId]: number | null }
  isGuarded?: boolean
}
export type PoolsMap = {
  [poolName: string]: Pool
}
export const POOLS_MAP: PoolsMap = {
  [USD_POOL_NAME]: {
    name: USD_POOL_NAME,
    addresses: USD_SWAP_ADDRESSES,
    lpToken: USD_SWAP_TOKEN,
    poolTokens: USD_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.USD,
    route: "usd",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [PULSE_CHAIN_POOL_NAME]: {
    name: PULSE_CHAIN_POOL_NAME,
    addresses: PULSE_CHAIN_USD_SWAP_ADDRESSES,
    lpToken: PULSE_CHAIN_SWAP_TOKEN,
    poolTokens: PULSE_CHAIN_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.USD,
    route: "pc-usd",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [P_BTC_POOL_NAME]: {
    name: P_BTC_POOL_NAME,
    addresses: P_BTC_SWAP_ADDRESSES,
    lpToken: P_BTC_SWAP_TOKEN,
    poolTokens: P_BTC_POOL_TOKENS,
    isSynthetic: true,
    type: PoolTypes.BTC,
    route: "btc",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [ETH_POOL_NAME]: {
    name: ETH_POOL_NAME,
    addresses: ETH_SWAP_ADDRESSES,
    lpToken: ETH_SWAP_TOKEN,
    poolTokens: ETH_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.ETH,
    route: "steth",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [FRAX_META_POOL_NAME]: {
    name: FRAX_META_POOL_NAME,
    metaSwapAddresses: FRAX_META_SWAP_ADDRESSES,
    lpToken: FRAX_META_SWAP_TOKEN,
    poolTokens: FRAX_USD_POOL_TOKENS,
    addresses: FRAX_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: FRAX_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "frax-usd",
    rewardPids: buildPids({}),
  },
  [FEI_META_POOL_NAME]: {
    name: FEI_META_POOL_NAME,
    metaSwapAddresses: FEI_META_SWAP_ADDRESSES,
    lpToken: FEI_META_SWAP_TOKEN,
    poolTokens: FEI_USD_POOL_TOKENS,
    addresses: FEI_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: FEI_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "fei-usd",
    rewardPids: buildPids({}),
  },
  [CST_META_POOL_NAME]: {
    name: CST_META_POOL_NAME,
    metaSwapAddresses: CST_META_SWAP_ADDRESSES,
    lpToken: CST_META_SWAP_TOKEN,
    poolTokens: CST_USD_POOL_TOKENS,
    addresses: CST_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: CST_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "cst-usd",
    rewardPids: buildPids({}),
  },
  [PXDC_META_POOL_NAME]: {
    name: PXDC_META_POOL_NAME,
    metaSwapAddresses: PXDC_META_SWAP_ADDRESSES,
    lpToken: PXDC_META_SWAP_TOKEN,
    poolTokens: PXDC_USD_POOL_TOKENS,
    addresses: PXDC_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: PXDC_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "pxdc-usd",
    rewardPids: buildPids({}),
  },
  [USDL_META_POOL_NAME]: {
    name: USDL_META_POOL_NAME,
    metaSwapAddresses: USDL_META_SWAP_ADDRESSES,
    lpToken: USDL_META_SWAP_TOKEN,
    poolTokens: USDL_USD_POOL_TOKENS,
    addresses: USDL_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: USDL_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "usdl-usd",
    rewardPids: buildPids({}),
  },
  [BUSD_META_POOL_NAME]: {
    name: BUSD_META_POOL_NAME,
    metaSwapAddresses: BUSD_META_SWAP_ADDRESSES,
    lpToken: BUSD_META_SWAP_TOKEN,
    poolTokens: BUSD_USD_POOL_TOKENS,
    addresses: BUSD_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: BUSD_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "busd-usd",
    rewardPids: buildPids({}),
  },
  [TBTC_META_POOL_NAME]: {
    name: TBTC_META_POOL_NAME,
    metaSwapAddresses: T_BTC_META_SWAP_ADDRESSES,
    lpToken: T_BTC_META_SWAP_TOKEN,
    poolTokens: TBTC_BTC_POOL_TOKENS,
    addresses: T_BTC_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: true,
    type: PoolTypes.BTC,
    underlyingPoolTokens: TBTC_BTC_UNDERLYING_POOL_TOKENS,
    underlyingPool: P_BTC_POOL_NAME,
    route: "tbtc",
    rewardPids: buildPids({}),
  },
}

// @dev note that metapools refer to the deposit addresses and not the meta addresses
const minichefPids: Partial<Record<ChainId, { [pool: string]: number }>> = {
  [ChainId.MAINNET]: {
    [ALETH_SWAP_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 1,
    [D4_SWAP_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 2,
    [STABLECOIN_SWAP_V2_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 3,
    [BTC_SWAP_V2_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 4,
    [TBTC_META_SWAP_V2_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 5,
    [TBTC_META_SWAP_V2_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 5,
    [SUSD_META_SWAP_V2_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 6,
    [SUSD_META_SWAP_V2_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 6,
    [WCUSD_META_SWAP_V2_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 7,
    [WCUSD_META_SWAP_V2_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 7,
    [TBTC_META_SWAP_V3_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 8,
    [TBTC_META_SWAP_V3_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 8,
    [SUSD_META_SWAP_V3_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 9,
    [SUSD_META_SWAP_V3_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 9,
    [WCUSD_META_SWAP_V3_DEPOSIT_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 10,
    [WCUSD_META_SWAP_V3_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 10,
    [FRAX_3_POOL_SWAP_ADDRESSES[ChainId.MAINNET].toLowerCase()]: 11,
  },
  [ChainId.HARDHAT]: {
    [ALETH_SWAP_ADDRESSES[ChainId.HARDHAT].toLowerCase()]: 1,
    [D4_SWAP_ADDRESSES[ChainId.HARDHAT].toLowerCase()]: 2,
    [STABLECOIN_SWAP_V2_ADDRESSES[ChainId.HARDHAT].toLowerCase()]: 3,
    [BTC_SWAP_V2_ADDRESSES[ChainId.HARDHAT].toLowerCase()]: 4,
  },
  [ChainId.ARBITRUM]: {
    [ARB_USD_SWAP_ADDRESSES[ChainId.ARBITRUM].toLowerCase()]: 1,
    [USDS_ARB_USD_SWAP_ADDRESSES[ChainId.ARBITRUM].toLowerCase()]: 2,
    [FRAX_USDC_SWAP_ADDRESSES[ChainId.ARBITRUM].toLowerCase()]: 3,
    [FRAX_USDT_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES[
      ChainId.ARBITRUM
    ].toLowerCase()]: 4,
    [FRAX_USDT_METAPOOL_SWAP_CONTRACT_ADDRESSES[
      ChainId.ARBITRUM
    ].toLowerCase()]: 4,
    [ARB_FRAX_USDS_METAPOOL_SWAP_CONTRACT_ADDRESSES[
      ChainId.ARBITRUM
    ].toLowerCase()]: 5,
    [FRAX_ARB_USD_SWAP_V2_ADDRESSES[ChainId.ARBITRUM].toLowerCase()]: 7,
  },
  [ChainId.OPTIMISM]: {
    [FRAX_USDC_SWAP_ADDRESSES[ChainId.OPTIMISM].toLowerCase()]: 1,
    [FRAX_OPT_USD_META_SWAP_DEPOSIT_ADDRESSES[
      ChainId.OPTIMISM
    ].toLowerCase()]: 2,
    [FRAX_OPT_USD_SWAP_ADDRESSES[ChainId.OPTIMISM].toLowerCase()]: 2,
    [FRAX_USDT_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES[
      ChainId.OPTIMISM
    ].toLowerCase()]: 3,
    [FRAX_USDT_METAPOOL_SWAP_CONTRACT_ADDRESSES[
      ChainId.OPTIMISM
    ].toLowerCase()]: 3,
    [FRAX_SUSD_METAPOOL_DEPOSIT_CONTRACT_ADDRESSES[
      ChainId.OPTIMISM
    ].toLowerCase()]: 4,
    [FRAX_SUSD_METAPOOL_SWAP_CONTRACT_ADDRESSES[
      ChainId.OPTIMISM
    ].toLowerCase()]: 4,
    [OPT_USD_SWAP_ADDRESSES[ChainId.OPTIMISM].toLowerCase()]: 5,
  },
  [ChainId.EVMOS]: {
    [EVMOS_FRAX_3_POOL_SWAP_ADDRESSES[ChainId.EVMOS].toLowerCase()]: 1,
  },
}

export function getMinichefPid(
  chainId: ChainId,
  poolAddress: string,
): number | null {
  return minichefPids?.[chainId]?.[poolAddress] || null
}

export function isLegacySwapABIPool(poolName: string): boolean {
  return new Set([P_BTC_POOL_NAME, USD_POOL_NAME, ETH_POOL_NAME]).has(poolName)
}
export function isMetaPool(poolName = ""): boolean {
  return new Set([
    FRAX_META_POOL_NAME,
    FEI_META_POOL_NAME,
    CST_META_POOL_NAME,
    PXDC_META_POOL_NAME,
    USDL_META_POOL_NAME,
    BUSD_META_POOL_NAME,
    TBTC_META_POOL_NAME,
  ]).has(poolName)
}

// maps a symbol string to a token object
export type TokensMap = {
  [symbol: string]: Token
}

export type BasicTokensMap = {
  [symbol: string]: BasicToken | undefined
}

export const TOKENS_MAP = Object.keys(POOLS_MAP).reduce((acc, poolName) => {
  const pool = POOLS_MAP[poolName as PoolName]
  const newAcc = { ...acc }
  pool.poolTokens.forEach((token) => {
    newAcc[token.symbol] = token
  })
  newAcc[pool.lpToken.symbol] = pool.lpToken
  return newAcc
}, {} as TokensMap)
export type TokenToPoolsMap = {
  [tokenSymbol: string]: string[]
}
export const TOKEN_TO_POOLS_MAP = Object.keys(POOLS_MAP).reduce(
  (acc, poolName) => {
    const pool = POOLS_MAP[poolName as PoolName]
    const newAcc = { ...acc }
    pool.poolTokens.forEach((token) => {
      newAcc[token.symbol] = (newAcc[token.symbol] || []).concat(
        poolName as PoolName,
      )
    })
    return newAcc
  },
  {} as TokenToPoolsMap,
)

export const TRANSACTION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SWAP: "SWAP",
  MIGRATE: "MIGRATE",
  STAKE_OR_CLAIM: "STAKE_OR_CLAIM",
}

export const POOL_FEE_PRECISION = 10

export enum SWAP_TYPES {
  DIRECT = "swapDirect", // route length 2
  SYNTH_TO_SYNTH = "swapSynthToSynth", // route length 2
  SYNTH_TO_TOKEN = "swapSynthToToken", // route length 3
  TOKEN_TO_SYNTH = "swapTokenToSynth", // route length 3
  TOKEN_TO_TOKEN = "swapTokenToToken", // route length 4
  INVALID = "invalid",
}

export function getIsVirtualSwap(swapType: SWAP_TYPES): boolean {
  return (
    swapType === SWAP_TYPES.SYNTH_TO_SYNTH ||
    swapType === SWAP_TYPES.SYNTH_TO_TOKEN ||
    swapType === SWAP_TYPES.TOKEN_TO_SYNTH ||
    swapType === SWAP_TYPES.TOKEN_TO_TOKEN
  )
}

export const SWAP_CONTRACT_GAS_ESTIMATES_MAP = {
  [SWAP_TYPES.INVALID]: BigNumber.from("999999999"), // 999,999,999
  [SWAP_TYPES.DIRECT]: BigNumber.from("200000"), // 157,807
  [SWAP_TYPES.TOKEN_TO_TOKEN]: BigNumber.from("2000000"), // 1,676,837
  [SWAP_TYPES.TOKEN_TO_SYNTH]: BigNumber.from("2000000"), // 1,655,502
  [SWAP_TYPES.SYNTH_TO_TOKEN]: BigNumber.from("1500000"), // 1,153,654
  [SWAP_TYPES.SYNTH_TO_SYNTH]: BigNumber.from("700000"), // 681,128 // TODO: https://github.com/saddle-finance/saddle-frontend/issues/471
  addLiquidity: BigNumber.from("400000"), // 386,555
  removeLiquidityImbalance: BigNumber.from("350000"), // 318,231
  removeLiquidityOneToken: BigNumber.from("250000"), // 232,947
  migrate: BigNumber.from("650000"), // 619,126
  virtualSwapSettleOrWithdraw: BigNumber.from("400000"),
}

export interface WalletInfo {
  name: string
  icon: string
  connector: AbstractConnector
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  TALLY: {
    name: "Tally",
    icon: tallyIcon,
    connector: injectedTallyProvider,
  },
  METAMASK: {
    name: "MetaMask",
    icon: metamaskIcon,
    connector: injectedMetaMaskProvider,
  },
  UNSTOPPABLE_DOMAINS: {
    name: "Unstoppable Domains",
    icon: unstoppableDomainsLogo,
    connector: uauth,
  },
  WALLET_CONNECT: {
    name: "WalletConnect",
    icon: walletconnectIcon,
    connector: walletconnect,
  },
  WALLET_LINK: {
    name: "Coinbase Wallet",
    icon: coinbasewalletIcon,
    connector: walletlink,
  },
}

// derived from https://docs.synthetix.io/tokens/list/
export const SYNTHETIX_TOKENS: { [chainId in ChainId]?: string[] } = {
  [ChainId.MAINNET]: [
    "0xd2df355c19471c8bd7d8a3aa27ff4e26a21b4076", // Aave (sAAVE)
    "0xf48e200eaf9906362bb1442fca31e0835773b8b4", // Australian Dollars (sAUD)
    "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6", // Bitcoin (sBTC)
    "0xe36e2d3c7c34281fa3bc737950a68571736880a1", // Cardano (sADA)
    "0xbbc455cb4f1b9e4bfc4b73970d360c8f032efee6", // Chainlink (sLINK)
    "0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b", // DeFi Index (sDEFI)
    "0x104edf1da359506548bfc7c25ba1e28c16a70235", // ETH / BTC (sETHBTC)
    "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb", // Ether (sETH)
    "0xd71ecff9342a5ced620049e616c5035f1db98620", // Euros (sEUR)
    "0xf6b1c627e95bfc3c1b4c9b825a032ff0fbf3e07d", // Japanese Yen (sJPY)
    "0x1715ac0743102bf5cd58efbb6cf2dc2685d967b6", // Polkadot (sDOT)
    "0x97fe22e7341a0cd8db6f6c021a24dc8f4dad855f", // Pound Sterling (sGBP)
    "0x269895a3df4d73b077fc823dd6da1b95f72aaf9b", // South Korean Won (sKRW)
    "0x0f83287ff768d1c1e17a42f44d644d7f22e8ee1d", // Swiss Franc (sCHF)
    "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f", // Synthetix (SNX)
    "0x57ab1ec28d129707052df4df418d58a2d46d5f51", // US Dollars (sUSD)
  ],
  [ChainId.HARDHAT]: [
    "0x0e801d84fa97b50751dbf25036d067dcf18858bf", // susd
    "0x2279b7a0a67db372996a5fab50d91eaa73d2ebe6", // sbtc
    "0x67d269191c92caf3cd7723f116c85e6e9bf55933", // seth
  ],
}

// "PASCAL" in bytes32 form
export const SYNTH_TRACKING_ID =
  "0x50415343414c0000000000000000000000000000000000000000000000000000"

// FLAGS
export const IS_VIRTUAL_SWAP_ACTIVE = true
export const IS_L2_SUPPORTED = true
export const IS_SDL_LIVE = true
export const IS_VESDL_LIVE = true
export const IS_POOL_REGISTRY_MIGRATION_LIVE = true
// FLAGS END

// Regex for readable decimal number
export const readableDecimalNumberRegex = /^[0-9]*[.,]?[0-9]*$/

// Numbers and durations
export const BN_1E18 = BigNumber.from(10).pow(18)
export const BN_DAY_IN_SECONDS = BigNumber.from(24 * 60 * 60)
export const BN_YEAR_IN_SECONDS = BN_DAY_IN_SECONDS.mul(365)
export const BN_MSIG_SDL_VEST_END_TIMESTAMP = BigNumber.from(1731651563)
export const A_PRECISION = BigNumber.from(100)
