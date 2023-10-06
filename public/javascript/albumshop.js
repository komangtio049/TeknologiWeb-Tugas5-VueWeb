const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Freudian', price: 450000, image: 'assets/freudian.webp' },
                { name: 'Joanne', price: 350000, image: 'assets/joanne.png' },
                { name: 'reputation', price: 375000, image: 'assets/reputation.png' },
                { name: 'MADE', price: 425000, image: 'assets/made.webp' },
                { name: 'Red (Taylor`s Version)', price: 410000, image: 'assets/red.jpeg' },
                { name: 'My Dear Melancholy', price: 350000, image: 'assets/mdm.jpg' },
                { name: 'Cigarettes After Sex', price: 375000, image: 'assets/cas.png' },
                { name: 'Born This Way Deluxe', price: 390000, image: 'assets/btw.png' },
                { name: 'The Fame Monster', price: 500000, image: 'assets/tfm.png' },
                { name: 'Never Enough', price: 470000, image: 'assets/neverenough.png' },
                { name: 'I NEVER DIE', price: 385000, image: 'assets/ineverdie.jpg' },
                { name: 'Ctrl Deluxe', price: 500000, image: 'assets/ctrl.jpeg' },
                { name: 'Nicole', price: 400000, image: 'assets/nicole.png' },
                { name: 'Cry', price: 420000, image: 'assets/cry.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 50000 },
                { amount: 100000 },
                { amount: 250000 },
                { amount: 350000 },
                { amount: 500000 },
                { amount: 600000 },
                { amount: 750000 },
                { amount: 1000000 },
            ]
        };
    },
    methods: {
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        },
        formatNumber(number) {
            // Menggunakan metode toLocaleString untuk menambahkan titik sebagai pemisah ribuan
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            }
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});
app.mount('#app');
