var dbQuery = function (): void {
  setTimeout(() => {
    console.log('Query results')
  }, 3000);
}

function loadPage(q: () => void) {
  console.log("Header");
  q();
  console.log("Sidbar");
  console.log("Footer");
}

loadPage(dbQuery)