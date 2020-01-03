class DataView<T> {
  success: boolean | null = null;
  code: string | null = null;
  message: string | null = null;
  data: T | null = null;
}

export default DataView;
