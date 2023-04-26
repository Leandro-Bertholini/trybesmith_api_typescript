import OrderModel from '../models/OrderModel';

async function getAll() {
  const listOfServices = await OrderModel.getAll();
  
  return { type: 200, data: listOfServices };
}

export default {
  getAll,
};