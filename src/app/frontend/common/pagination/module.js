// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import namespaceModule from './../namespace/module';
import {PaginationService} from './service';

/**
 * Module containing validators for the application.
 */
export default angular.module('kubernetesDashboard.common.pagination', [namespaceModule.name])
    .service('kdPaginationService', PaginationService);
