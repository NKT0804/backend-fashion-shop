import mongoose from 'mongoose';

const bannerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
            default: 0,
        },
        imageUrl: {
            type: String,
            require: true,
        },
        linkTo: {
            type: String,
        },
        role: {
            type: String,
            required: true,
            enum: ['slider', 'banner'],
            default: 'slider',
        },
        disabled: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);
const Banner = mongoose.model('Banner', bannerSchema);
export default Banner;
