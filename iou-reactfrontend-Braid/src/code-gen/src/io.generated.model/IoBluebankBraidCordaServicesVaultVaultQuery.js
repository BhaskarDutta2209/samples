/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NetCordaCoreNodeServicesVaultPageSpecification from './NetCordaCoreNodeServicesVaultPageSpecification';
import NetCordaCoreNodeServicesVaultSort from './NetCordaCoreNodeServicesVaultSort';

/**
 * The IoBluebankBraidCordaServicesVaultVaultQuery model module.
 * @module io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery
 * @version 1.0.0
 */
class IoBluebankBraidCordaServicesVaultVaultQuery {
    /**
     * Constructs a new <code>IoBluebankBraidCordaServicesVaultVaultQuery</code>.
     * @alias module:io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery
     * @param contractStateType {String} Java class name
     */
    constructor(contractStateType) { 
        
        IoBluebankBraidCordaServicesVaultVaultQuery.initialize(this, contractStateType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, contractStateType) { 
        obj['contractStateType'] = contractStateType;
    }

    /**
     * Constructs a <code>IoBluebankBraidCordaServicesVaultVaultQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery} obj Optional instance to populate.
     * @return {module:io.generated.model/IoBluebankBraidCordaServicesVaultVaultQuery} The populated <code>IoBluebankBraidCordaServicesVaultVaultQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoBluebankBraidCordaServicesVaultVaultQuery();

            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], Object);
            }
            if (data.hasOwnProperty('paging')) {
                obj['paging'] = NetCordaCoreNodeServicesVaultPageSpecification.constructFromObject(data['paging']);
            }
            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = NetCordaCoreNodeServicesVaultSort.constructFromObject(data['sorting']);
            }
            if (data.hasOwnProperty('contractStateType')) {
                obj['contractStateType'] = ApiClient.convertToType(data['contractStateType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} criteria
 */
IoBluebankBraidCordaServicesVaultVaultQuery.prototype['criteria'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultPageSpecification} paging
 */
IoBluebankBraidCordaServicesVaultVaultQuery.prototype['paging'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultSort} sorting
 */
IoBluebankBraidCordaServicesVaultVaultQuery.prototype['sorting'] = undefined;

/**
 * Java class name
 * @member {String} contractStateType
 */
IoBluebankBraidCordaServicesVaultVaultQuery.prototype['contractStateType'] = undefined;






export default IoBluebankBraidCordaServicesVaultVaultQuery;

