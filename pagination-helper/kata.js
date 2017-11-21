// complete this object/class

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
