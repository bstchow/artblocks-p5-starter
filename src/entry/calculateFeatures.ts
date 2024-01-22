import { Configuration } from '../generation/configuration';
import { TokenData } from 'src/types';

/**
 * Calculate features for the given token data.
 * @param {Object} tokenData
 * @param {string} tokenData.tokenId - Unique identifier of the token on its contract.
 * @param {string} tokenData.hash - Unique hash generated upon minting the token.
 */
function calculateFeatures(tokenData: TokenData) {
    const config = new Configuration(tokenData)
    const identity = (v) => v
    const featureMapping = { 
    }

    return Object.keys(featureMapping).reduce((acc, key) => {
        acc[key] = featureMapping[key](config[key])
        return acc;
    }, {});
}

