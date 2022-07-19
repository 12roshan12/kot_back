const express = require('express')
const db = require('./db/db')
const Itemsroutes = require('./routes/demo.route');

const availStatusRoutes = require('./routes/availStatus.route');
const availTableRoutes = require('./routes/availTable.route');
const availTypeRoutes = require('./routes/availType.route');
const billRoutes = require('./routes/bill.route');
const categoryRoutes = require('./routes/category.route');
const customerRoutes = require('./routes/customer.route');
const dineGroupRoutes = require('./routes/dineGroup.route');
const hallRoutes = require('./routes/hall.route');
const kotRoutes = require('./routes/kot.route');
const menuItemRoutes = require('./routes/menuItem.route');
const orderRoutes = require('./routes/orders.route');
const staffRoutes = require('./routes/staff.route');


var body = require('body-parser');

const app = express()

// db.connect()


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/demo', Itemsroutes);
app.use('/availStatus', availStatusRoutes);
app.use('/availTable', availTableRoutes);
app.use('/availType', availTypeRoutes);
app.use('/bill', billRoutes);
app.use('/category', categoryRoutes);
app.use('/customer', customerRoutes);
app.use('/dineGroup', dineGroupRoutes);
app.use('/hall', hallRoutes);
app.use('/kot', kotRoutes);
app.use('/menuItem', menuItemRoutes);
app.use('/order', orderRoutes);
app.use('/staff', staffRoutes);


app.use(body.json());
app.use(body.urlencoded(
  {extended: true}
));


app.listen(8000, () => {
  console.log('Server started!')
})