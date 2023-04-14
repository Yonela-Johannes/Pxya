import { Router } from "express";
import { products} from "../data";
import expressAsyncHandler from "express-async-handler";
import { ProductModel } from "../Models/product.model";
const router = Router();

router.get("/seed", expressAsyncHandler (
    async (req, res) => {
        const productCount = await ProductModel.countDocuments()
        if(productCount){
            res.send("Seed is already done!!")
        }

        await ProductModel.create(products);
        res.send("Seed is Done!")
}))

router.get("/", expressAsyncHandler(
  async (req, res) => {
        const DBproducts = await ProductModel.find()
        res.send(DBproducts)
    }
))

router.get("/search/:search", (req, res) => {
    const search = req.params.search;
    const product = products.filter(food => food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    res.send(product)
})

router.get("/:productId", expressAsyncHandler(
    async (req, res) => {
        const product = await ProductModel.findById(req.params.productId);
        res.send(product)
    }
))

export default router
