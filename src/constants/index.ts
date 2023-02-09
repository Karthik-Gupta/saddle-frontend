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

//Pulsechain base and meta pools
export const USD_POOL_NAME = "pascalUSD"
export const FOUR_POOL_NAME = "pascalD4"
export const WRS_BTC_POOL_NAME = "pascalWRenSBTC"
export const ST_ETH_POOL_NAME = "pascalSTETH"
export const R_ETH_POOL_NAME = "pascalRETH"
export const AL_ETH_POOL_NAME = "pascalalETH"
export const EUR_POOL_NAME = "pascalEUR"
export const FRAX_META_POOL_NAME = "pascalFrax-USD"
export const MIM_META_POOL_NAME = "pascalMIM-USD"
export const SUSD_META_POOL_NAME = "pascalSUSD-USD"
export const FEI_META_POOL_NAME = "pascalFEI-USD"
export const AL_USD_META_POOL_NAME = "pascalALUSD-USD"
export const TUSD_META_POOL_NAME = "pascalTUSD-USD"
export const USDL_META_POOL_NAME = "pascalUSDL-USD"
export const TBTC_META_POOL_NAME = "pascalTBTC-BTC"
export const BUSD_META_POOL_NAME = "pascalBUSD-USD"

export const NetworkContextName = "NETWORK"
export const BTC_POOL_NAME = "BTC"
export const ALETH_POOL_NAME = "alETH"
export const D4_POOL_NAME = "D4"
export const VETH2_POOL_NAME = "vETH2"
export const TBTC_METAPOOL_V2_NAME = "tBTC Meta V2"
export const USDS_ARB_USD_METAPOOL_NAME = "usds-arbUSDV2 Meta"

export type PoolName =
  | typeof USD_POOL_NAME
  | typeof FOUR_POOL_NAME
  | typeof WRS_BTC_POOL_NAME
  | typeof ST_ETH_POOL_NAME
  | typeof R_ETH_POOL_NAME
  | typeof AL_ETH_POOL_NAME
  | typeof EUR_POOL_NAME
  | typeof FRAX_META_POOL_NAME
  | typeof MIM_META_POOL_NAME
  | typeof SUSD_META_POOL_NAME
  | typeof FEI_META_POOL_NAME
  | typeof AL_USD_META_POOL_NAME
  | typeof TUSD_META_POOL_NAME
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
  PULSECHAIN_TESTNET = 941,
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
})

export const MASTER_REGISTRY_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d",
  [ChainId.MAINNET]: "0xc5ad17b98D7fe73B6dD3b0df5b3040457E68C045",
  [ChainId.PULSECHAIN_TESTNET]: "0x03010C9002565e65d44de4aFEB2e8fF804E13236",
})

export const PSC_WPLS_PULSEX_LP_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xf6754DE381c7C47AdDAb17D604e8d448C325C817",
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

export const RETROACTIVE_SDL_MERKLETREE_DATA = buildAddresses({
  [ChainId.HARDHAT]: "hardhat.json",
})

export const PSC_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x8174A7eF68F9dCb6DCE2eEe990F1231F2390C52B",
})

export const VOTING_ESCROW_CONTRACT_ADDRESS = buildAddresses({
  [ChainId.HARDHAT]: "0x457cCf29090fe5A24c19c1bc95F492168C0EaFdb",
  [ChainId.MAINNET]: "0xD2751CdBED54B87777E805be36670D7aeAe73bb2",
  [ChainId.PULSECHAIN_TESTNET]: "0x186132F72F43B5fF022A5070ECC264628Ec71782",
})

export const FEE_DISTRIBUTOR_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x8A93d247134d91e0de6f96547cB0204e5BE8e5D8",
  [ChainId.MAINNET]: "0xabd040A92d29CDC59837e79651BB2979EA66ce04",
  [ChainId.PULSECHAIN_TESTNET]: "0x55f0C0Df78de2fc714098475FcF7DDC18e162D3D",
})

export const GAUGE_MINTER_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0xB82008565FdC7e44609fA118A4a681E92581e680",
  [ChainId.MAINNET]: "0x358fE82370a1B9aDaE2E3ad69D6cF9e503c96018",
  [ChainId.PULSECHAIN_TESTNET]: "0x383F1701b6A516A9B2987D1aEeec457296A606B1",
})

export const GAUGE_HELPER_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x381445710b5e73d34aF196c53A3D5cDa58EDBf7A",
  [ChainId.MAINNET]: "0x8020E4134AD6a694AdbE9521a12C751e67CE9861",
  [ChainId.PULSECHAIN_TESTNET]: "0xB8369A0CB5AA3a350a94cf5A5931fF440251fc12",
})

export const GAUGE_CONTROLLER_ADDRESSES = buildAddresses({
  [ChainId.HARDHAT]: "0x5fc748f1FEb28d7b76fa1c6B07D8ba2d5535177c",
  [ChainId.MAINNET]: "0x99Cb6c36816dE2131eF2626bb5dEF7E5cc8b9B14",
  [ChainId.PULSECHAIN_TESTNET]: "0x5C368B8f6722d45Ac3fe44DF01fB3a221f071455",
})

// Pulsechain
export const USD_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x11f3112d5d377b1F546C14A4F139D4edfD346678",
})

export const USD_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x038C67ca8f2afb604114B44924B1FbDc0c6c4c7c",
})

export const FOUR_POOL_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xCD739ee0f114cF686C41A679b622789F2E787a18",
})

export const FOUR_POOL_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xD12FF87adA58Ef6d4ECF87C5492e0C7180Cd4C47",
})

export const WRS_BTC_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x3520eC3C44Cb651bf8C4F8938bb66B08Ec951580",
})

export const WRS_BTC_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xcEd56389f822DD8D3b029D966aD0561eFBDB28fA",
})

export const ST_ETH_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x7b5548542C91ACe526Dbd958044d47C8207d9220",
})

export const ST_ETH_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x3C992A6b25896424466884017F67022038738bb1",
})

export const R_ETH_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0e5535dD37F5AB56E0F41A57B7283B68F2bA5b4f",
})

export const R_ETH_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x368c98284820db4295d89d63337A5b3683Bd6388",
})

export const AL_ETH_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x1b5Fc10804D912D8880842EC154dd1247D94521F",
})

export const AL_ETH_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xF7876208335A12A9d6EE591e6A697b4E923e5264",
})

export const EUR_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x9469BD1a4736b6EE47dea6C7cFa40d4bc4b038ef",
})

export const EUR_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x50281C71d89663237a93326713fD2FEECD61D132",
})

export const FRAX_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x89Baf06FE5a2A656cdC1488F733c85A8123fF3CE",
})

export const FRAX_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x78178b68cdd47DE47706928bd3406639A1Fe468B",
})

export const FRAX_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xdabcc51E902F4d8Ad6A805382747544317273743",
})

export const MIM_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x2BBBA09a9662851d29A33340805B1793A5192f87",
})

export const MIM_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x01AB0d74DCA8340352f2584Ee9bA1d2bCdf2a64d",
})

export const MIM_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x9E86110ef6D5d6cA40268cba03526bda2ac4Ee8E",
})

export const S_USD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x83d87a74D5609687CADbD408F527769dF01d1eC9",
})

export const S_USD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x02c848EF9587b104F6F299FbE5749a3632f9a6D3",
})

export const S_USD_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xDEc8498356b7C8e3D9f39320544f7B3641bCE0Ca",
})

export const FEI_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xb91ed6F25145a29C87e5996ABbBE3579177D3c5f",
})

export const FEI_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0CC54AA270C148DD8849df2DD19739ab09D64F13",
})

export const FEI_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x9369833e3aa2bBb159d7bBc54dB8d4CB2dE7a0DD",
})

export const AL_USD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0aBd479c5fc44c407840DCAB63b7eE67eF8Cc21D",
})

export const AL_USD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xAe16c5527772e96a59E7873E93f0097Ccd404B12",
})

export const AL_USD_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x386cfA16635230f1B02eDE96Aa9202593e959593",
})

export const TUSD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x7f7095c4257E957362afbf14212aA4eFD5F255dB",
})

export const TUSD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x7fC6ea6565d2bDD2eb3f32C634C3C0507bd4653f",
})

export const TUSD_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x9B51EcD921A2E954F45646E9B1323aaa17E887c9",
})

export const USDL_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x473896E5EFa3bc885768028556C0C9A290553F16",
})

export const USDL_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xe027Ff53c80D16E339a603c0b4EE6aeb28646604",
})

export const USDL_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x554FbA7eB4349Fa1aa35D1621906C2A9abdF976d",
})

export const BUSD_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x0deb34209b6b2aD31Fb7098995e35cb5c548d7b4",
})

export const BUSD_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xD995b0DAc037CFfc68bEEF681Ce9C60d02aA177A",
})

export const BUSD_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xe1273D306E3bdb4D10c86E279085316F01D58632",
})

export const T_BTC_META_SWAP_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x1a133b9f7c731170F4Ca2Ccce387f5D36AA53D6E",
})

export const T_BTC_META_SWAP_DEPOSIT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x5D2DAe94b82F6bD3eeb4dAFd1FBCcF971Ff60824",
})

export const T_BTC_META_SWAP_TOKEN_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xfD949081698a7a1e0127d5506D94e3A19Df2a392",
})

export const PSC_TOKEN = new Token(
  PSC_TOKEN_ADDRESSES,
  18,
  "PSC",
  "pascal", // Updated per CoinGecko
  "Pascal DAO",
  false,
  false,
)

export const USD_SWAP_TOKEN = new Token(
  USD_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalUSD",
  "pascalusd",
  "Pascal DAI/USDC/USDT",
  false,
  true,
)

export const FOUR_POOL_SWAP_TOKEN = new Token(
  FOUR_POOL_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalD4",
  "pascald4",
  "Pascal alUSD/FEI/FRAX/MIM",
  false,
  true,
)

export const WRS_BTC_SWAP_TOKEN = new Token(
  WRS_BTC_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalWRenSBTC",
  "pascalwrensbtc",
  "Pascal WBTC/renBTC/sBTC",
  false,
  true,
)

export const ST_ETH_SWAP_TOKEN = new Token(
  ST_ETH_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalSTETH",
  "pascalsteth",
  "Pascal WETH/stETH",
  false,
  true,
)

export const R_ETH_SWAP_TOKEN = new Token(
  R_ETH_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalRETH",
  "pascalreth",
  "Pascal WETH/rETH",
  false,
  true,
)

export const AL_ETH_SWAP_TOKEN = new Token(
  AL_ETH_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalalETH",
  "pascalaleth",
  "Pascal WETH/alETH/sETH",
  false,
  true,
)

export const EUR_SWAP_TOKEN = new Token(
  EUR_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalEUR",
  "pascaleur",
  "Pascal EURS/sEUR/EUROC",
  false,
  true,
)

export const FRAX_META_SWAP_TOKEN = new Token(
  FRAX_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalFrax-USD",
  "pascalfrax-usd",
  "Pascal FRAX/Pascal USD",
  false,
  true,
)

export const MIM_META_SWAP_TOKEN = new Token(
  MIM_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalMIM-USD",
  "pascalmim-usd",
  "Pascal MIM/Pascal USD",
  false,
  true,
)

export const S_USD_META_SWAP_TOKEN = new Token(
  S_USD_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalSUSD-USD",
  "pascalsusd-usd",
  "Pascal SUSD/Pascal USD",
  false,
  true,
)

export const FEI_META_SWAP_TOKEN = new Token(
  FEI_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalFEI-USD",
  "pascalfei-usd",
  "Pascal FEI/Pascal USD",
  false,
  true,
)

export const AL_USD_META_SWAP_TOKEN = new Token(
  AL_USD_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalALUSD-USD",
  "pascalalusd-usd",
  "Pascal ALUSD/Pascal USD",
  false,
  true,
)

export const TUSD_META_SWAP_TOKEN = new Token(
  TUSD_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalTUSD-USD",
  "pascaltusd-usd",
  "Pascal TUSD/Pascal USD",
  false,
  true,
)

export const USDL_META_SWAP_TOKEN = new Token(
  USDL_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalUSDL-USD",
  "pascalusdl-usd",
  "Pascal USDL/Pascal USD",
  false,
  true,
)

export const BUSD_META_SWAP_TOKEN = new Token(
  BUSD_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalBUSD-USD",
  "pascalbusd-usd",
  "Pascal BUSD/Pascal USD",
  false,
  true,
)

export const T_BTC_META_SWAP_TOKEN = new Token(
  T_BTC_META_SWAP_TOKEN_ADDRESSES,
  18,
  "pascalTBTC-BTC",
  "pascaltbtc-btc",
  "Pascal TBTC/Pascal BTC",
  false,
  true,
)

// Stablecoins
const SUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
  [ChainId.HARDHAT]: "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
  [ChainId.OPTIMISM]: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
  [ChainId.PULSECHAIN_TESTNET]: "0x8d2514A25Ea7e70F56012A9933d5bc656C98206C",
})
export const SUSD = new Token(
  SUSD_CONTRACT_ADDRESSES,
  18,
  "sUSD",
  "nusd",
  "sUSD",
  true,
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
  [ChainId.PULSECHAIN_TESTNET]: "0xDA4d88363b392B7deFDcc673b5e7b99632953D7B",
})

export const DAI = new Token(DAI_CONTRACT_ADDRESSES, 18, "DAI", "dai", "Dai")

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
  [ChainId.PULSECHAIN_TESTNET]: "0xc1C34DFA50D458f7C415c411b6D33106C9B40E4b",
})

export const USDC = new Token(
  USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "USDC Coin",
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
  [ChainId.PULSECHAIN_TESTNET]: "0x554EE9AD86966Fb3aF48F4936A818f91b753C40e",
})

export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
)

const MIM_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.ARBITRUM]: "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
  [ChainId.PULSECHAIN_TESTNET]: "0xc56984162B3923541d939c04A843dE9505C6FC1E",
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
  [ChainId.PULSECHAIN_TESTNET]: "0x12119dA5BBe0ba16Ffe47265105278EC7939aecb",
})

export const FRAX = new Token(
  FRAX_CONTRACT_ADDRESSES,
  18,
  "FRAX",
  "frax",
  "Frax",
)

const ALUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
  [ChainId.ROPSTEN]: "0x8b7a92FdbC77c6d8c61644D118c37D813B2069C4",
  [ChainId.HARDHAT]: "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
  [ChainId.FANTOM]: "0xB67FA6deFCe4042070Eb1ae1511Dcd6dcc6a532E",
  [ChainId.PULSECHAIN_TESTNET]: "0xf9309bEda593962cD37Aa278517F82D76a243573",
})

export const ALUSD = new Token(
  ALUSD_CONTRACT_ADDRESSES,
  18,
  "alUSD",
  "alchemix-usd",
  "Alchemix USD",
)

const TUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xE61ccEB75038f1E5b381417Fa200cC9eB77b5bB4",
})
export const TUSD = new Token(
  TUSD_CONTRACT_ADDRESSES,
  18,
  "TUSD",
  "tusd",
  "TrueUSD",
)

const USDL_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0xba83B9248098Aa827C0e7C07c147bf404D961730",
})
export const USDL = new Token(
  USDL_CONTRACT_ADDRESSES,
  18,
  "USDL",
  "usdl",
  "USDL",
)

const BUSD_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x4B6e8830D1618442CE2556cfB5d93336EF6e3a4a",
})
export const BUSD = new Token(
  BUSD_CONTRACT_ADDRESSES,
  18,
  "BUSD",
  "busd",
  "Binance USD",
)

const ST_ETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x2bf07b02c73b464527563FE6045C3A403E1c631D",
})
export const STETH = new Token(
  ST_ETH_CONTRACT_ADDRESSES,
  18,
  "stETH",
  "steth",
  "Lido Staked ETH",
)

const R_ETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x999f323bf864Be1719CFb3176Bb4B2C6b1235169",
})
export const RETH = new Token(
  R_ETH_CONTRACT_ADDRESSES,
  18,
  "rETH",
  "reth",
  "Rocket Pool ETH",
)

const EURS_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x7b503dE982feE391047C0dAd56fD631fe191f561",
})
export const EURS = new Token(
  EURS_CONTRACT_ADDRESSES,
  2,
  "EURS",
  "eurs",
  "Stasis EURO",
)

const SEUR_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x34B2C705119a6232Ace73aEfb439029de0CFAf51",
})
export const SEUR = new Token(
  SEUR_CONTRACT_ADDRESSES,
  18,
  "sEUR",
  "seur",
  "Synthetic EURO",
)

const EUROC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.PULSECHAIN_TESTNET]: "0x7263E49AB847Ab4F05457f7ECE71FAD2dE55462E",
})
export const EUROC = new Token(
  EUROC_CONTRACT_ADDRESSES,
  6,
  "EUROC",
  "euroc",
  "Euro Coin",
)

export const FRAX_ARB_USD_POOL_V2_TOKENS = [FRAX, USDC, USDT]
export const STABLECOIN_POOL_TOKENS = [DAI, USDC, USDT]
export const SUSD_POOL_TOKENS = [SUSD, ...STABLECOIN_POOL_TOKENS]
export const OPT_USD_POOL_TOKENS = [DAI, USDC, USDT]
export const FRAX_OPT_USD_POOL_TOKENS = [FRAX, ...OPT_USD_POOL_TOKENS]

export const FRAX_USDC_POOL_TOKENS = [USDC, FRAX]
export const FRAX_USDT_POOL_TOKENS = [USDT, ...FRAX_USDC_POOL_TOKENS]
export const FRAX_SUSD_POOL_TOKENS = [SUSD, ...FRAX_USDC_POOL_TOKENS]
export const FRAX_ALUSD_POOL_TOKENS = [ALUSD, ...FRAX_USDC_POOL_TOKENS]

// Tokenized BTC
const TBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
  [ChainId.ROPSTEN]: "0x9F6aA48f852Dd928F53A7dd3dcd2AC96a76c8727",
  [ChainId.HARDHAT]: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  [ChainId.PULSECHAIN_TESTNET]: "0x2626231226Ae17A3Af0601BCd8EF995F844B2b52",
})
export const TBTC = new Token(
  TBTC_CONTRACT_ADDRESSES,
  18,
  "TBTC",
  "tbtc",
  "tBTC",
)

const WBTC_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  [ChainId.ROPSTEN]: "0x7264594dFB80a150f80b2988862605dDfda53727",
  [ChainId.HARDHAT]: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  [ChainId.EVMOS]: "0xF80699Dc594e00aE7bA200c7533a07C1604A106D",
  [ChainId.PULSECHAIN_TESTNET]: "0x79a3a03656034c4e8Fd5F351ac81941c1Cb73581",
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
  [ChainId.PULSECHAIN_TESTNET]: "0xf4A9101f0d2Ad2d513fdC88B351F5a61CfB76F39",
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
  [ChainId.PULSECHAIN_TESTNET]: "0x45F3f7565DAb68Bf87DfA89C951c662D884813F5",
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

export const EVMOS_BTC_POOL_TOKENS = [WBTC, RENBTC]
export const FRAX_3_POOL_TOKENS = [USDC, USDT, FRAX]

const WETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.ROPSTEN]: "0x0B68F3b6c7fc0b6dD4D9a2399C4AE35be060ba42",
  [ChainId.HARDHAT]: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
  [ChainId.PULSECHAIN_TESTNET]: "0x50A56ACDb6B4c69C1C103485856280c367f27887",
})
export const WETH = new Token(
  WETH_CONTRACT_ADDRESSES,
  18,
  "WETH",
  "ethereum",
  "WETH",
)

const ALETH_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  [ChainId.ROPSTEN]: "0xaA91d3f2C53BDBEdd45FaB0308d0b51315Dc32E7",
  [ChainId.HARDHAT]: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
  [ChainId.PULSECHAIN_TESTNET]: "0x8CBf42EC28D64d82C522C76A251FFF6E2abf2C09",
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
  [ChainId.PULSECHAIN_TESTNET]: "0x98F211743b0DDeF105d0c5d71ff3f48aAd7235A4",
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

const FEI_CONTRACT_ADDRESSES = buildAddresses({
  [ChainId.MAINNET]: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  [ChainId.ROPSTEN]: "0x02020a3006587080a00d6675AFfACC99344521AC",
  [ChainId.HARDHAT]: "0xa82fF9aFd8f496c3d6ac40E2a0F282E47488CFc9",
  [ChainId.PULSECHAIN_TESTNET]: "0x29Db61d1b31c37Ec4a3f54984fC0DCeF853011CD",
})
export const FEI = new Token(
  FEI_CONTRACT_ADDRESSES,
  18,
  "FEI",
  "fei-usd",
  "Fei Protocol",
)

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

// pulsechain
export const USD_POOL_TOKENS = [DAI, USDC, USDT]
export const FOUR_POOL_TOKENS = [ALUSD, FEI, FRAX, MIM]
export const WRS_BTC_POOL_TOKENS = [WBTC, RENBTC, SBTC]
export const ST_ETH_POOL_TOKENS = [WETH, STETH]
export const R_ETH_POOL_TOKENS = [WETH, RETH]
export const AL_ETH_POOL_TOKENS = [WETH, ALETH, SETH]
export const EUR_POOL_TOKENS = [EURS, SEUR, EUROC]

export const TBTC_BTC_POOL_TOKENS = [TBTC, ...WRS_BTC_POOL_TOKENS]
export const TBTC_BTC_UNDERLYING_POOL_TOKENS = [TBTC, WRS_BTC_SWAP_TOKEN]

export const FRAX_USD_POOL_TOKENS = [FRAX, ...USD_POOL_TOKENS]
export const FRAX_USD_UNDERLYING_POOL_TOKENS = [FRAX, USD_SWAP_TOKEN]
export const MIM_USD_POOL_TOKENS = [MIM, ...USD_POOL_TOKENS]
export const MIM_USD_UNDERLYING_POOL_TOKENS = [MIM, USD_SWAP_TOKEN]
export const SUSD_USD_POOL_TOKENS = [SUSD, ...USD_POOL_TOKENS]
export const SUSD_USD_UNDERLYING_POOL_TOKENS = [SUSD, USD_SWAP_TOKEN]
export const FEI_USD_POOL_TOKENS = [FEI, ...USD_POOL_TOKENS]
export const FEI_USD_UNDERLYING_POOL_TOKENS = [FEI, USD_SWAP_TOKEN]
export const ALUSD_USD_POOL_TOKENS = [ALUSD, ...USD_POOL_TOKENS]
export const ALUSD_USD_UNDERLYING_POOL_TOKENS = [ALUSD, USD_SWAP_TOKEN]
export const TUSD_USD_POOL_TOKENS = [TUSD, ...USD_POOL_TOKENS]
export const TUSD_USD_UNDERLYING_POOL_TOKENS = [TUSD, USD_SWAP_TOKEN]
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
  [FOUR_POOL_NAME]: {
    name: FOUR_POOL_NAME,
    addresses: FOUR_POOL_SWAP_ADDRESSES,
    lpToken: FOUR_POOL_SWAP_TOKEN,
    poolTokens: FOUR_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.USD,
    route: "usd-4",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [WRS_BTC_POOL_NAME]: {
    name: WRS_BTC_POOL_NAME,
    addresses: WRS_BTC_SWAP_ADDRESSES,
    lpToken: WRS_BTC_SWAP_TOKEN,
    poolTokens: WRS_BTC_POOL_TOKENS,
    isSynthetic: true,
    type: PoolTypes.BTC,
    route: "btc",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [ST_ETH_POOL_NAME]: {
    name: ST_ETH_POOL_NAME,
    addresses: ST_ETH_SWAP_ADDRESSES,
    lpToken: ST_ETH_SWAP_TOKEN,
    poolTokens: ST_ETH_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.ETH,
    route: "steth",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [R_ETH_POOL_NAME]: {
    name: R_ETH_POOL_NAME,
    addresses: R_ETH_SWAP_ADDRESSES,
    lpToken: R_ETH_SWAP_TOKEN,
    poolTokens: R_ETH_POOL_TOKENS,
    isSynthetic: false,
    type: PoolTypes.ETH,
    route: "reth",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [AL_ETH_POOL_NAME]: {
    name: AL_ETH_POOL_NAME,
    addresses: AL_ETH_SWAP_ADDRESSES,
    lpToken: AL_ETH_SWAP_TOKEN,
    poolTokens: AL_ETH_POOL_TOKENS,
    isSynthetic: true,
    type: PoolTypes.ETH,
    route: "aleth",
    isOutdated: false,
    rewardPids: buildPids({}),
    isGuarded: false,
  },
  [EUR_POOL_NAME]: {
    name: EUR_POOL_NAME,
    addresses: EUR_SWAP_ADDRESSES,
    lpToken: EUR_SWAP_TOKEN,
    poolTokens: EUR_POOL_TOKENS,
    isSynthetic: true,
    type: PoolTypes.OTHER,
    route: "eur",
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
  [MIM_META_POOL_NAME]: {
    name: MIM_META_POOL_NAME,
    metaSwapAddresses: MIM_META_SWAP_ADDRESSES,
    lpToken: MIM_META_SWAP_TOKEN,
    poolTokens: MIM_USD_POOL_TOKENS,
    addresses: MIM_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: MIM_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "mim-usd",
    rewardPids: buildPids({}),
  },
  [SUSD_META_POOL_NAME]: {
    name: SUSD_META_POOL_NAME,
    metaSwapAddresses: S_USD_META_SWAP_ADDRESSES,
    lpToken: S_USD_META_SWAP_TOKEN,
    poolTokens: SUSD_USD_POOL_TOKENS,
    addresses: S_USD_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: true,
    type: PoolTypes.USD,
    underlyingPoolTokens: SUSD_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "susd",
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
  [AL_USD_META_POOL_NAME]: {
    name: AL_USD_META_POOL_NAME,
    metaSwapAddresses: AL_USD_META_SWAP_ADDRESSES,
    lpToken: AL_USD_META_SWAP_TOKEN,
    poolTokens: ALUSD_USD_POOL_TOKENS,
    addresses: AL_USD_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: ALUSD_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "alusd",
    rewardPids: buildPids({}),
  },
  [TUSD_META_POOL_NAME]: {
    name: TUSD_META_POOL_NAME,
    metaSwapAddresses: TUSD_META_SWAP_ADDRESSES,
    lpToken: TUSD_META_SWAP_TOKEN,
    poolTokens: TUSD_USD_POOL_TOKENS,
    addresses: TUSD_META_SWAP_DEPOSIT_ADDRESSES,
    isSynthetic: false,
    type: PoolTypes.USD,
    underlyingPoolTokens: TUSD_USD_UNDERLYING_POOL_TOKENS,
    underlyingPool: USD_POOL_NAME,
    route: "tusd",
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
    route: "usdl",
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
    route: "busd",
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
    underlyingPool: WRS_BTC_POOL_NAME,
    route: "tbtc",
    rewardPids: buildPids({}),
  },
}

// @dev note that metapools refer to the deposit addresses and not the meta addresses
const minichefPids: Partial<Record<ChainId, { [pool: string]: number }>> = {}

export function getMinichefPid(
  chainId: ChainId,
  poolAddress: string,
): number | null {
  return minichefPids?.[chainId]?.[poolAddress] || null
}

export function isLegacySwapABIPool(poolName: string): boolean {
  return new Set([
    WRS_BTC_POOL_NAME,
    USD_POOL_NAME,
    AL_ETH_POOL_NAME,
    EUR_POOL_NAME,
  ]).has(poolName)
}
export function isMetaPool(poolName = ""): boolean {
  return new Set([
    FRAX_META_POOL_NAME,
    MIM_META_POOL_NAME,
    SUSD_META_POOL_NAME,
    FEI_META_POOL_NAME,
    AL_USD_META_POOL_NAME,
    TUSD_META_POOL_NAME,
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
  [ChainId.PULSECHAIN_TESTNET]: [
    "0x45F3f7565DAb68Bf87DfA89C951c662D884813F5", // sBTC
    "0x98F211743b0DDeF105d0c5d71ff3f48aAd7235A4", // sETH
    "0x34B2C705119a6232Ace73aEfb439029de0CFAf51", // sEUR
    "0x8d2514A25Ea7e70F56012A9933d5bc656C98206C", //sUSD
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
