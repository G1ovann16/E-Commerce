import mongoose from 'mongoose';
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});
const Category = mongoose.model('Category', CategorySchema);
export default Category;