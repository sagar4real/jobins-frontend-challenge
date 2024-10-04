<script lang="ts" setup>
import { ref } from "vue";

// Interface for Order data
interface Order {
  id: number;
  customer: string;
  date: string;
  total: string;
  method: string;
  status: string;
}

// Dummy data for orders
const orders = ref<Order[]>([
  {
    id: 1,
    customer: "John Doe",
    date: "2024-10-01",
    total: "$100.00",
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2024-10-02",
    total: "$250.00",
    method: "PayPal",
    status: "Pending",
  },
  {
    id: 3,
    customer: "Bob Johnson",
    date: "2024-10-03",
    total: "$75.00",
    method: "Debit Card",
    status: "Canceled",
  },
]);

// Function to return the appropriate class for status
const getStatusClass = (status: string) => {
  switch (status) {
    case "Completed":
      return "text-green-500";
    case "Pending":
      return "text-yellow-500";
    case "Canceled":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};
</script>

<template>
  <div>
    <section class="table-section">
      <!-- Table Controls -->
      <div class="table-top flex flex-wrap gap-4 items-center justify-between">
        <div class="flex items-center gap-4 w-full md:w-auto">
          <select
            class="w-full md:w-[250px] px-4 py-2 rounded-[6px] text-[#8B909A]"
          >
            <option>All</option>
            <option>Completed</option>
            <option>Canceled</option>
          </select>

          <div class="relative w-full md:w-[250px]">
            <input
              type="text"
              class="w-full px-4 py-2 pr-12 rounded-[6px] text-[#8B909A]"
              placeholder="Search"
            />
            <svg
              class="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8B909A]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </div>

        <div class="w-full md:w-[250px]">
          <select class="w-full px-4 py-2 rounded-[6px] text-[#8B909A]">
            <option>Filter by date range</option>
          </select>
        </div>
      </div>

      <!-- Table Wrapper with Scroll -->
      <div
        class="table-wrapper mt-4 overflow-x-auto rounded-[16px] bg-white px-4 md:px-10"
      >
        <table class="min-w-full">
          <thead class="border-b border-[#E9E7FD]">
            <tr>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                ID
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                CUSTOMER
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                DATE
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                TOTAL
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                METHOD
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4"
              >
                STATUS
              </th>
              <th
                class="py-6 px-2 md:px-4 text-[#8B909A] font-medium text-sm md:text-heading4 hidden md:table-cell"
              >
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in orders"
              :key="order.id"
              class="border-b border-[#E9E7FD]"
            >
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                {{ order.id }}
              </td>
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                {{ order.customer }}
              </td>
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                {{ order.date }}
              </td>
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                {{ order.total }}
              </td>
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                {{ order.method }}
              </td>
              <td
                class="py-4 px-2 md:px-4 text-center text-sm md:text-heading4"
              >
                <span :class="getStatusClass(order.status)">
                  {{ order.status }}
                </span>
              </td>
              <td class="py-4 px-2 md:px-4 text-center hidden md:table-cell">
                <button class="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div
          class="pagination-wrapper flex flex-wrap items-center justify-between py-4 gap-4"
        >
          <div class="pagination-left">
            <div class="flex items-center gap-2">
              <p class="text-[#8B909A] text-sm md:text-heading4">Showing</p>
              <select
                class="rounded-[6px] px-4 py-2 text-[#000] text-center border border-[#E9E7FD]"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <p class="text-[#8B909A] text-sm md:text-heading4">of 50</p>
            </div>
          </div>
          <div class="pagination-right">
            <nav aria-label="Page navigation example">
              <ul class="flex items-center gap-2 text-sm">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-black"
                    >1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4L1 1"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add custom styles if needed */
</style>
