***Approach***

1. **Component-based Architecture**  
   The project uses React's component-based approach. Each part of the app, like `ProductCard`, `AddToCartModal`, and `Pagination`, is made into its own component. This makes the code easier to reuse, manage, and scale.

2. **Routing**  
   I used `react-router-dom` to set up navigation between the Product Listing page (`/`) and the Thank You page (`/thank-you`).

3. **State Management**  
   I used React's `useState` hook to manage the state of things like the modal (whether it's open or closed) and pagination (current page).

4. **Pagination**  
   I split the product list into smaller chunks so that only a few products show on each page. The `Pagination` component helps users navigate between different pages by changing the `currentPage`.

5. **User Interaction**  
   - Clicking "View Product" takes the user to a Thank You page with a message about the selected product.
   - Clicking "Add to Cart" opens a modal with product details and a confirmation option.

***Challenges Faced***

1. **Handling Modal State**  
   The challenge was to make sure only one modal opens at a time. The solution was to manage the modal state separately inside each `ProductCard` component.

2. **Pagination**  
   Setting up pagination involved figuring out how many products to show per page using `Array.slice()` on the product data. This gave a simple and effective solution for navigating through products.

***Run Project***

To run the project, simply use:

```bash
npm start
```