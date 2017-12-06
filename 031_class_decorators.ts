@detailedLog('billing')
class AccountsPayable {
  constructor() { }
}

@detailedLog('warehouse')
class ProductManager {
  constructor() { }
}


function detailedLog(dashboard: string) {
  if (dashboard == 'billing') {
    console.log('working in the billing department');
    return function (target: Object) { };
  } else {
    return function (target: Object) { };
  }
}

var post = new AccountsPayable;
var post = new ProductManager;