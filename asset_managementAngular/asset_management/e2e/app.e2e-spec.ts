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

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for asset_management', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be asset_management', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('asset_management');
    })
  });

  it('network-name should be asset-management@0.0.2-deploy.16',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('asset-management@0.0.2-deploy.16.bna');
    });
  });

  it('navbar-brand should be asset_management',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('asset_management');
    });
  });

  
    it('Items component should be loadable',() => {
      page.navigateTo('/Items');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Items');
      });
    });

    it('Items table should have 7 columns',() => {
      page.navigateTo('/Items');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Faculty component should be loadable',() => {
      page.navigateTo('/Faculty');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Faculty');
      });
    });

    it('Faculty table should have 5 columns',() => {
      page.navigateTo('/Faculty');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('Officer component should be loadable',() => {
      page.navigateTo('/Officer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Officer');
      });
    });

    it('Officer table should have 4 columns',() => {
      page.navigateTo('/Officer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Store component should be loadable',() => {
      page.navigateTo('/Store');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Store');
      });
    });

    it('Store table should have 4 columns',() => {
      page.navigateTo('/Store');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('Principal component should be loadable',() => {
      page.navigateTo('/Principal');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Principal');
      });
    });

    it('Principal table should have 4 columns',() => {
      page.navigateTo('/Principal');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('faculty_to_officer component should be loadable',() => {
      page.navigateTo('/faculty_to_officer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('faculty_to_officer');
      });
    });
  
    it('officer_to_principal component should be loadable',() => {
      page.navigateTo('/officer_to_principal');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('officer_to_principal');
      });
    });
  
    it('principal_to_officer component should be loadable',() => {
      page.navigateTo('/principal_to_officer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('principal_to_officer');
      });
    });
  
    it('officer_to_store component should be loadable',() => {
      page.navigateTo('/officer_to_store');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('officer_to_store');
      });
    });
  
    it('store_to_officer component should be loadable',() => {
      page.navigateTo('/store_to_officer');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('store_to_officer');
      });
    });
  
    it('officer_to_faculty component should be loadable',() => {
      page.navigateTo('/officer_to_faculty');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('officer_to_faculty');
      });
    });
  

});