'use strict';

/**
 * instrument-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instrument-type.instrument-type');
