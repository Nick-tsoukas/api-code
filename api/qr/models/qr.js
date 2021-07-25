"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate(data) {
      console.log("yo before create\r\n", data);
      // create media library item from data.imgUrl
      // will return media library id
      // set data.qrImageUrl = {id}
    },
  },
};
