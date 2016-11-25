'use strict';

var td              = require('testdouble');
var expect          = require('../../../helpers/expect');
var path            = require('path');
var mockProject     = require('../../../fixtures/ember-cordova-mock/project');
var ValidateLocType = require('../../../../lib/tasks/validate/location-type');

describe('Validate Root Url', function() {
  var validateLoc;

  beforeEach(function() {
    validateLoc = new ValidateLocType({
      project: mockProject.project,
      ui: mockProject.ui,
    });
  });

  afterEach(function() {
    td.reset();
  });

  it('throws an easyError with config.locationType is not hash', function() {
    let config = { locationType: 'auto' };

    expect(function() {
      validateLoc.run(config)
    }).to.throw(Error);
  });

  it('throws an easyError with config.locationType is blank', function() {
    let config = {};

    expect(function() {
      validateLoc.run(config)
    }).to.throw(Error);
  });

  it('resolves if config.locationType is hash', function() {
    let config = { locationType: 'hash' };
    expect(validateLoc.run(config)).to.be.fulfilled;
  });
});
