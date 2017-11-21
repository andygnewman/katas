// // TODO: complete this object/class
//
// function PaginationHelper(collection, itemsPerPage){
//
// }
//
// PaginationHelper.prototype.itemCount = function() {
//
// }
//
// PaginationHelper.prototype.pageCount = function() {
//
// }
//
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//
// }
//
// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//
// }

class PaginationHelper {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    pageIndex ++;
    if (pageIndex > this.pageCount() || pageIndex < 0) return -1;
    if (pageIndex === this.pageCount()) return this.collection.length % this.itemsPerPage;
    return this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    if (itemIndex + 1 > this.collection.length || this.collection.length < 1 || itemIndex < 0) return -1;
    return parseInt((itemIndex + 1) / this.itemsPerPage);
  }
}


const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log('pageCount: ', helper.pageCount()); //should == 2
console.log('itemsCount: ', helper.itemCount()); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
