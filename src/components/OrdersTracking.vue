<template>
  <v-container>
    <v-row>
      <v-col xs="12"><h2 class="text-red">Orders Tracking</h2></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Order ID</th>
              <th class="text-left">Image</th>
              <th class="text-left">Name</th>
              <th class="text-left">Shipping Address</th>
              <th class="text-left">Status</th>
              <th class="text-left">Total Price</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Order Date</th>
              <th class="text-left">Arrived By</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table" :key="item.name">
              <td>{{ item.orderId }}</td>
              <td>
                <v-avatar :image="item.img" size="60"></v-avatar>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.status }}</td>
              <td>
                <v-chip variant="elevated" color="primary">
                  ${{ item.totalPrice }}
                </v-chip>
              </td>
              <td>
                <v-chip variant="elevated" color="green">
                  {{ item.qty }}
                </v-chip>
              </td>
              <td>
                <v-chip variant="outlined" color="pink">
                  {{ item.orderDate }}
                </v-chip>
              </td>
              <td>
                <v-chip variant="outlined" color="cyan">
                  {{ item.arrivedBy }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OrdersTracking",

  data() {
    return {
      table: [
        {
          orderId: 12,
          img: "https://justfields.com/storage/projects/7M5rV059/jeans06.jpg",
          name: "Jeans",
          address: "12 st ay haga",
          status: "pending",
          totalPrice: 67,
          qty: 2,
          orderDate: "27/4/2023",
          arrivedBy: "1/5/2023",
        },
        {
          orderId: 10,
          img: "https://justfields.com/storage/projects/7M5rV059/bags03.jpg",
          name: "Women Hand Bag",
          address: "12 st ay makan",
          status: "arrived",
          totalPrice: 80,
          qty: 3,
          orderDate: "25/4/2023",
          arrivedBy: "28/4/2023",
        },
        {
          orderId: 17,
          img: "https://justfields.com/storage/projects/7M5rV059/jacket02.jpg",
          name: "Women jacket",
          address: "12 st new Maadi",
          status: "shipped",
          totalPrice: 124,
          qty: 3,
          orderDate: "27/4/2023",
          arrivedBy: "2/5/2023",
        },
        {
          orderId: 4,
          img: "https://justfields.com/storage/projects/7M5rV059/jaens01.jpg",
          name: "Jeans",
          address: "12 st new Maadi",
          status: "shipped",
          totalPrice: 70,
          qty: 3,
          orderDate: "27/4/2023",
          arrivedBy: "2/5/2023",
        },
        {
          orderId: 41,
          img: "https://justfields.com/storage/projects/7M5rV059/shirt01.jpg",
          name: "Shirt",
          address: "12 st Maadi",
          status: "arrived",
          totalPrice: 45,
          qty: 1,
          orderDate: "27/4/2023",
          arrivedBy: "29/4/2023",
        },
        {
          orderId: 44,
          img: "https://justfields.com/storage/projects/7M5rV059/shoes06.jpg",
          name: "Shoes",
          address: "12 st new Cairo",
          status: "pending",
          totalPrice: 63,
          qty: 1,
          orderDate: "25/4/2023",
          arrivedBy: "3/5/2023",
        },
        {
          orderId: 31,
          img: "https://justfields.com/storage/projects/7M5rV059/t-shirt02.jpg",
          name: "T-Shirt",
          address: "12 st Cairo",
          status: "arrived",
          totalPrice: 33,
          qty: 1,
          orderDate: "25/4/2023",
          arrivedBy: "28/4/2023",
        },
      ],
    };
  },
};
</script>
