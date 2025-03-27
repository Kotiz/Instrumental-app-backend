'use strict';

/**
 * instrument-model service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instrument-model.instrument-model');
