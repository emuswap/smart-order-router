import { CHAIN_TO_ADDRESSES_MAP, ChainId, Token } from '@uniswap/sdk-core';
import { FACTORY_ADDRESS } from '@uniswap/v3-sdk';
import { NETWORKS_WITH_SAME_UNISWAP_ADDRESSES } from './chains';
export const BNB_TICK_LENS_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].tickLensAddress;
export const BNB_NONFUNGIBLE_POSITION_MANAGER_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].nonfungiblePositionManagerAddress;
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const BNB_SWAP_ROUTER_02_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].swapRouter02Address;
export const BNB_V3_MIGRATOR_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3MigratorAddress;
export const V3_CORE_FACTORY_ADDRESSES = {
    ...constructSameAddressMap(FACTORY_ADDRESS),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].v3CoreFactoryAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].v3CoreFactoryAddress,
    [ChainId.CLASSIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC].v3CoreFactoryAddress,
    [ChainId.CLASSIC_MORDOR]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC_MORDOR].v3CoreFactoryAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].v3CoreFactoryAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].v3CoreFactoryAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].v3CoreFactoryAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].v3CoreFactoryAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].v3CoreFactoryAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].v3CoreFactoryAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].v3CoreFactoryAddress,
    [ChainId.ZIRCUIT]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT].v3CoreFactoryAddress,
    [ChainId.ZIRCUIT_SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT_SEPOLIA].v3CoreFactoryAddress,
};
export const QUOTER_V2_ADDRESSES = {
    ...constructSameAddressMap('0x61fFE014bA17989E743c5F6cB21bF9697530B21e'),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].quoterAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].quoterAddress,
    [ChainId.CLASSIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC].quoterAddress,
    [ChainId.CLASSIC_MORDOR]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC_MORDOR].quoterAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].quoterAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].quoterAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].quoterAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].quoterAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].quoterAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].quoterAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].quoterAddress,
    [ChainId.ZIRCUIT]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT].quoterAddress,
    [ChainId.ZIRCUIT_SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT_SEPOLIA].quoterAddress,
};
export const MIXED_ROUTE_QUOTER_V1_ADDRESSES = {
    [ChainId.MAINNET]: CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v1MixedRouteQuoterAddress,
    [ChainId.GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.GOERLI].v1MixedRouteQuoterAddress,
};
export const UNISWAP_MULTICALL_ADDRESSES = {
    ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984'),
    [ChainId.CELO]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO].multicallAddress,
    [ChainId.CELO_ALFAJORES]: CHAIN_TO_ADDRESSES_MAP[ChainId.CELO_ALFAJORES].multicallAddress,
    [ChainId.CLASSIC]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC].multicallAddress,
    [ChainId.CLASSIC_MORDOR]: CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC_MORDOR].multicallAddress,
    [ChainId.OPTIMISM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.OPTIMISM_GOERLI].multicallAddress,
    [ChainId.SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.SEPOLIA].multicallAddress,
    [ChainId.ARBITRUM_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_GOERLI].multicallAddress,
    [ChainId.BNB]: CHAIN_TO_ADDRESSES_MAP[ChainId.BNB].multicallAddress,
    [ChainId.AVALANCHE]: CHAIN_TO_ADDRESSES_MAP[ChainId.AVALANCHE].multicallAddress,
    [ChainId.BASE_GOERLI]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE_GOERLI].multicallAddress,
    [ChainId.BASE]: CHAIN_TO_ADDRESSES_MAP[ChainId.BASE].multicallAddress,
    [ChainId.ZIRCUIT]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT].multicallAddress,
    [ChainId.ZIRCUIT_SEPOLIA]: CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT_SEPOLIA].multicallAddress,
};
export const SWAP_ROUTER_02_ADDRESSES = (chainId) => {
    if (chainId == ChainId.BNB) {
        return BNB_SWAP_ROUTER_02_ADDRESS;
    }
    if (chainId == ChainId.CLASSIC) {
        return CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC].swapRouter02Address;
    }
    if (chainId == ChainId.CLASSIC_MORDOR) {
        return CHAIN_TO_ADDRESSES_MAP[ChainId.CLASSIC_MORDOR].swapRouter02Address;
    }
    if (chainId == ChainId.ZIRCUIT) {
        return CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT].swapRouter02Address;
    }
    if (chainId == ChainId.ZIRCUIT_SEPOLIA) {
        return CHAIN_TO_ADDRESSES_MAP[ChainId.ZIRCUIT_SEPOLIA].swapRouter02Address;
    }
    return '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
};
export const OVM_GASPRICE_ADDRESS = '0x420000000000000000000000000000000000000F';
export const ARB_GASINFO_ADDRESS = '0x000000000000000000000000000000000000006C';
export const TICK_LENS_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.ARBITRUM_ONE].tickLensAddress;
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].nonfungiblePositionManagerAddress;
export const V3_MIGRATOR_ADDRESS = CHAIN_TO_ADDRESSES_MAP[ChainId.MAINNET].v3MigratorAddress;
export const MULTICALL2_ADDRESS = '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696';
export function constructSameAddressMap(address, additionalNetworks = []) {
    return NETWORKS_WITH_SAME_UNISWAP_ADDRESSES.concat(additionalNetworks).reduce((memo, chainId) => {
        memo[chainId] = address;
        return memo;
    }, {});
}
export const WETH9 = {
    [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.GOERLI]: new Token(ChainId.GOERLI, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.SEPOLIA]: new Token(ChainId.SEPOLIA, '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM]: new Token(ChainId.OPTIMISM, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.OPTIMISM_GOERLI]: new Token(ChainId.OPTIMISM_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_ONE]: new Token(ChainId.ARBITRUM_ONE, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ARBITRUM_GOERLI]: new Token(ChainId.ARBITRUM_GOERLI, '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BASE_GOERLI]: new Token(ChainId.BASE_GOERLI, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.BASE]: new Token(ChainId.BASE, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.CLASSIC]: new Token(ChainId.CLASSIC, '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a', 18, 'WETC', 'Wrapped Ether'),
    [ChainId.CLASSIC_MORDOR]: new Token(ChainId.CLASSIC_MORDOR, '0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a', 18, 'WETC', 'Wrapped Ether'),
    [ChainId.ZIRCUIT]: new Token(ChainId.ZIRCUIT, '0xB624103Eb622d655dd834B694Aa6EA0363f2A156', 18, 'WETH', 'Wrapped Ether'),
    [ChainId.ZIRCUIT_SEPOLIA]: new Token(ChainId.ZIRCUIT_SEPOLIA, '0xB624103Eb622d655dd834B694Aa6EA0363f2A156', 18, 'WETH', 'Wrapped Ether'),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWwvYWRkcmVzc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO0FBQ3pGLE1BQU0sQ0FBQyxNQUFNLHdDQUF3QyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQztBQUM5SCxvRUFBb0U7QUFDcEUsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLG1CQUFvQixDQUFDO0FBQ25HLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUU3RixNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBZTtJQUNuRCxHQUFHLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztJQUMzQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CO0lBQ3pFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxvQkFBb0I7SUFDN0YsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQjtJQUMvRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsb0JBQW9CO0lBQzdGLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxvQkFBb0I7SUFDL0YsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQjtJQUMvRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsb0JBQW9CO0lBQy9GLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxvQkFBb0I7SUFDdkUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQjtJQUNuRixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsb0JBQW9CO0lBQ3ZGLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7SUFDekUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLG9CQUFvQjtJQUMvRSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsb0JBQW9CO0NBQ2hHLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBZTtJQUM3QyxHQUFHLHVCQUF1QixDQUFDLDRDQUE0QyxDQUFDO0lBQ3hFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhO0lBQ2xFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhO0lBQ3RGLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhO0lBQ3hFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhO0lBQ3RGLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxhQUFhO0lBQ3hGLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhO0lBQ3hFLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxhQUFhO0lBQ3hGLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhO0lBQ2hFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxhQUFhO0lBQzVFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxhQUFhO0lBQ2hGLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhO0lBQ2xFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFzQixDQUFDLE9B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