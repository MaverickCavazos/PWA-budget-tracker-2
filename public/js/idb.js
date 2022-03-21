let db;
const request = indexedDB.open('budget_tracker', 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_data', { autoIncrement: true });
  };

request.onsuccess = function(event) {
    db = event.target.result;
    if (navigator.onLine) {
      // uploadTracker();
    }
  };
  request.onerror = function(event) {
    console.log(event.target.errorCode);
  };

 
function saveRecord(data) {
    const transaction = db.transaction(['new_data'], 'readwrite');
    const dataObjectStore = transaction.objectStore('new_data');
    dataObjectStore.add(data);
  }