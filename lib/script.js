/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.example.basic.faculty_to_officer} fto
 * @transaction
 */
async function facultyToOfficer(fto) {  // eslint-disable-line no-unused-vars
    const assets = fto.assets;
    console.log('Received at: ' + fto.timestamp);
    
    assets.status = 'REQUESTED';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}

/**
* Sample transaction processor function.
* @param {org.example.basic.officer_to_principal} otp
* @transaction
*/
async function OfficerToPrincipal(otp) {  // eslint-disable-line no-unused-vars
    const assets = otp.assets;
    console.log('Received at: ' + otp.timestamp);
    
    assets.status = 'IN_PROCESS';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}

/**
* Sample transaction processor function.
* @param {org.example.basic.principal_to_officer} pto
* @transaction
*/
async function PrincipalToOfficer(pto) {  // eslint-disable-line no-unused-vars
    const assets = pto.assets;
    console.log('Received at: ' + pto.timestamp);
    pto.permission= true;
    assets.status = 'GRANTED';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}
/**
* Sample transaction processor function.
* @param {org.example.basic.officer_to_store} ots
* @transaction
*/
async function OfficerToStore(ots) {  // eslint-disable-line no-unused-vars
    const assets = ots.assets;
      const store = ots.store;
      store.officerToStore.push(ots);
    console.log('Received at: ' + ots.timestamp);
    assets.status = 'GRANTED';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}
/**
* Sample transaction processor function.
* @param {org.example.basic.store_to_officer} sto
* @transaction
*/
async function storeToOfficer(sto) {  // eslint-disable-line no-unused-vars
    const assets = sto.assets;
    console.log('Received at: ' + sto.timestamp);
    assets.status = 'SENT';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}
/**
* Sample transaction processor function.
* @param {org.example.basic.officer_to_faculty} otf
* @transaction
*/
async function officer_to_faculty(otf) {  // eslint-disable-line no-unused-vars
    const assets = otf.assets;
    console.log('Received at: ' + otf.timestamp);
    assets.status = 'RECIEVED';
    console.log('Status: ' + assets.status);
    console.log('qty of Asset: ' + assets.qty);
    console.log('Price of Asset: ' + assets.price);
   
   const assetRegistry = await getAssetRegistry('org.example.basic.Items');
   await assetRegistry.update(assets);
}
