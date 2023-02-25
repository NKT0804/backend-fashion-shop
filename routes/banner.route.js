import express from 'express';
import asyncHandler from 'express-async-handler';
import { protect, auth } from '../middleware/auth.middleware.js';
import { multerUpload } from '../utils/multer.js';
import bannerController from '../controllers/banner.controller.js';
import validate from '../middleware/validate.middleware.js';

const bannerRouter = express.Router();

bannerRouter.get('/', asyncHandler(bannerController.getBanners));

bannerRouter.get('/:id', protect, auth('staff', 'admin'), asyncHandler(bannerController.getBannerById));

bannerRouter.post(
    '/',
    validate.createBanner,
    protect,
    auth('staff', 'admin'),
    multerUpload.single('banner'),
    asyncHandler(bannerController.createBanners),
);
bannerRouter.put(
    '/:id',
    validate.updateBanner,
    protect,
    auth('staff', 'admin'),
    multerUpload.single('banner'),
    asyncHandler(bannerController.updateBanner),
);
bannerRouter.patch('/:id/increaseIndex', protect, auth('staff', 'admin'), asyncHandler(bannerController.increaseIndex));

bannerRouter.patch('/:id/decreaseIndex', protect, auth('staff', 'admin'), asyncHandler(bannerController.decreaseIndex));

bannerRouter.delete('/:id', protect, auth('admin'), asyncHandler(bannerController.deleteBanner));

export default bannerRouter;
