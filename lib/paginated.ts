export default function Paginated<T extends { new(...args: any[]): any }>(constructor: T) {
  return class extends constructor {
    private _page: number;
    private _pageSize: number;

    page = (page: number) => {

      this.updateParams(p => ({ ...p, page }))
      return this;
    }

    pageSize = (page_size: number) => {
      this.updateParams(p => ({ ...p, page_size }))
      return this;
    };
  }
}
