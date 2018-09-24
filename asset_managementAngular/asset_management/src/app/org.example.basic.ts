import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.example.basic{
   export enum assetStatus {
      REQUESTED,
      IN_PROCESS,
      GRANTED,
      SENT,
      RECIEVED,
   }
   export class Items extends Asset {
      assetId: string;
      faculty: Faculty;
      value: string;
      qty: number;
      price: number;
      status: assetStatus;
   }
   export class Faculty extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
      status: assetStatus;
   }
   export class Officer extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class Store extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class Principal extends Participant {
      participantId: string;
      firstName: string;
      lastName: string;
   }
   export class faculty_to_officer extends Transaction {
      assets: Items;
      officer: Officer;
      faculty: Faculty;
   }
   export class officer_to_principal extends Transaction {
      assets: Items;
      officer: Officer;
      principal: Principal;
   }
   export class principal_to_officer extends Transaction {
      assets: Items;
      officer: Officer;
      principal: Principal;
      permission: boolean;
   }
   export class officer_to_store extends Transaction {
      assets: Items;
      officer: Officer;
      store: Store;
   }
   export class store_to_officer extends Transaction {
      assets: Items;
      officer: Officer;
      store: Store;
   }
   export class officer_to_faculty extends Transaction {
      assets: Items;
      officer: Officer;
      faculty: Faculty;
   }
// }
