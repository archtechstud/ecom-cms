module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '93d886ad87561a6e66b9356773d6fe69'),
  },
});
