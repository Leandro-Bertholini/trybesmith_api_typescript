import OrderModels from '../models/OrderModels';

async function getAll() {
  const listOfServices = await OrderModels.getAll();
  
  return { type: 200, data: listOfServices };
}

export default {
  getAll,
};