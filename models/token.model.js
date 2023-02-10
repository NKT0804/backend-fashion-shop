const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TokenSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        accessToken: {
            type: String,
            required: true,
        },
        refreshToken: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Token = mongoose.model('Token', TokenSchema);
export default Token;
