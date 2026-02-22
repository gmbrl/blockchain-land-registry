const sendMessage = (phone, message) => {
    console.log(`OTP sent to ${phone}: ${message}`);
    return { success: true, message: 'OTP sent successfully' };
};

module.exports = { sendMessage };
