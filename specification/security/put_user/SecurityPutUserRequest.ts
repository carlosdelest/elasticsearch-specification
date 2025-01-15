/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { RequestBase } from '@_types/Base'
import { Metadata, Password, Refresh, Username } from '@_types/common'

/**
 * Create or update users.
 *
 * A password is required for adding a new user but is optional when updating an existing user.
 * To change a user’s password without updating any other fields, use the change password API.
 * @rest_spec_name security.put_user
 * @availability stack stability=stable
 * @cluster_privileges manage_security
 * @doc_id security-api-put-user
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/user/{username}'
      methods: ['PUT', 'POST']
    }
  ]
  path_parts: {
    username: Username
  }
  query_parameters: {
    refresh?: Refresh
  }
  body: {
    username?: Username
    email?: string | null
    full_name?: string | null
    metadata?: Metadata
    password?: Password
    password_hash?: string
    roles?: string[]
    enabled?: boolean
  }
}
