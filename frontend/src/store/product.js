import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    // 1) Validate fields
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Missing required fields" };
    }

    try {
      // 2) POST request to your API
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      // 3) Parse JSON (assumes your server responds with JSON)
      const data = await res.json();

      // 4) Handle server-side errors via HTTP status
      if (!res.ok) {
        // If your server includes an error message,
        // data might look like { message: "Some error" }.
        return {
          success: false,
          message: data.message || "Failed to create product",
        };
      }

      // 5) On success, update the Zustand store
      //    Adjust if your server returns differently than { data: theNewProduct }
      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {
      // 6) Catch fetch/connection errors
      return { success: false, message: error.message };
    }

},

fetchProducts: async () => {
  const res = await fetch("/api/products");
  const data = await res.json();
  set({ products: data.data });
},

deleteProduct: async (pid) => {
  const res = await fetch(`/api/products/${pid}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (!data.success) return { success: false, message: data.message };

  // update the ui immediately, without needing a refresh
  set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
  return { success: true, message: data.message };
},

updateProduct: async (pid, updatedProduct) => {
  const res = await fetch(`/api/products/${pid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });
  const data = await res.json();
  if (!data.success) return { success: false, message: data.message };

  // update the ui immediately, without needing a refresh
  set((state) => ({
    products: state.products.map((product) => (product._id === pid ? data.data : product)),
  }));

  return { success: true, message: data.message };
},



}));