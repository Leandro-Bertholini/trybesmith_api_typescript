import OrderModel from '../models/OrderModel';

async function getAll() {
  const listOfServices = await OrderModel.getAll();
  
  return { status: 200, data: listOfServices };
}

export default {
  getAll,
};