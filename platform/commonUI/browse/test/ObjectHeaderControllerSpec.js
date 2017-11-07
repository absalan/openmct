/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2017, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define(
    ["../src/ObjectHeaderController"],
    function (ObjectHeaderController) {

        describe("The object header controller", function () {
            var mockScope,
                mockDomainObject,
                mockCapabilities,
                mockMutationCapability,
                mockTypeCapability,
                mockEvent,
                mockCurrentTarget,
<<<<<<< HEAD
=======
                model,
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                controller;

            beforeEach(function () {
                mockMutationCapability = jasmine.createSpyObj("mutation", ["mutate"]);
                mockTypeCapability = jasmine.createSpyObj("type", ["typeDef", "hasFeature"]);
                mockTypeCapability.typeDef = { name: ""};
                mockTypeCapability.hasFeature.andCallFake(function (feature) {
                    return feature === 'creation';
                });

                mockCapabilities = {
                    mutation: mockMutationCapability,
                    type: mockTypeCapability
                };

<<<<<<< HEAD
                mockDomainObject = jasmine.createSpyObj("domainObject", ["getCapability", "model"]);
                mockDomainObject.model = {name: "Test name"};
=======
                model = {
                    name: "Test name"
                };
                mockDomainObject = jasmine.createSpyObj("domainObject", ["getCapability", "getModel"]);
                mockDomainObject.getModel.andReturn(model);
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                mockDomainObject.getCapability.andCallFake(function (key) {
                    return mockCapabilities[key];
                });

                mockScope = {
                    domainObject: mockDomainObject
                };

<<<<<<< HEAD
                mockCurrentTarget = jasmine.createSpyObj("currentTarget", ["blur", "innerHTML"]);
=======
                mockCurrentTarget = jasmine.createSpyObj("currentTarget", ["blur", "textContent"]);
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                mockCurrentTarget.blur.andReturn(mockCurrentTarget);

                mockEvent = {
                    which: {},
                    type: {},
                    currentTarget: mockCurrentTarget
                };

                controller = new ObjectHeaderController(mockScope);
            });

            it("updates the model with new name on blur", function () {
                mockEvent.type = "blur";
<<<<<<< HEAD
                mockCurrentTarget.innerHTML = "New name";
=======
                mockCurrentTarget.textContent = "New name";
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                controller.updateName(mockEvent);

                expect(mockMutationCapability.mutate).toHaveBeenCalled();
            });

            it("updates the model with a default for blank names", function () {
                mockEvent.type = "blur";
<<<<<<< HEAD
                mockCurrentTarget.innerHTML = "";
                controller.updateName(mockEvent);

                expect(mockCurrentTarget.innerHTML.length).not.toEqual(0);
=======
                mockCurrentTarget.textContent = "";
                controller.updateName(mockEvent);

                expect(mockCurrentTarget.textContent.length).not.toEqual(0);
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                expect(mockMutationCapability.mutate).toHaveBeenCalled();
            });

            it("does not update the model if the same name", function () {
                mockEvent.type = "blur";
<<<<<<< HEAD
                mockCurrentTarget.innerHTML = mockDomainObject.model.name;
=======
                mockCurrentTarget.textContent = mockDomainObject.getModel().name;
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                controller.updateName(mockEvent);

                expect(mockMutationCapability.mutate).not.toHaveBeenCalled();
            });

            it("updates the model on enter keypress event only", function () {
<<<<<<< HEAD
                mockCurrentTarget.innerHTML = "New name";
=======
                mockCurrentTarget.textContent = "New name";
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                controller.updateName(mockEvent);

                expect(mockMutationCapability.mutate).not.toHaveBeenCalled();

                mockEvent.which = 13;
                controller.updateName(mockEvent);

                expect(mockMutationCapability.mutate).toHaveBeenCalledWith(jasmine.any(Function));

<<<<<<< HEAD
                mockMutationCapability.mutate.mostRecentCall.args[0](mockDomainObject.model);

                expect(mockDomainObject.model.name).toBe("New name");
            });

            it("blurs the field on enter key press", function () {
=======
                mockMutationCapability.mutate.mostRecentCall.args[0](model);

                expect(mockDomainObject.getModel().name).toBe("New name");
            });

            it("blurs the field on enter key press", function () {
                mockCurrentTarget.textContent = "New name";
>>>>>>> bda30f1475c51475b84a1a8bdb481cf2e82258f6
                mockEvent.which = 13;
                controller.updateName(mockEvent);

                expect(mockEvent.currentTarget.blur).toHaveBeenCalled();
            });

            it("allows editting name when object is creatable", function () {
                expect(controller.allowEdit()).toBe(true);
            });

            it("disallows editting name when object is non-creatable", function () {
                mockTypeCapability.hasFeature.andReturn(false);

                expect(controller.allowEdit()).toBe(false);

            });
        });
    }
);
