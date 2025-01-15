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
import { Ids } from '@_types/common'

/**
 * Authenticate SAML.
 *
 * Submits a SAML response message to Elasticsearch for consumption.
 * @rest_spec_name security.saml_authenticate
 * @availability stack since=7.5.0 stability=stable
 * @availability serverless stability=stable visibility=private
 * @doc_id security-api-saml-authenticate
 */
export interface Request extends RequestBase {
  urls: [
    {
      path: '/_security/saml/authenticate'
      methods: ['POST']
    }
  ]
  body: {
    /** The SAML response as it was sent by the user’s browser, usually a Base64 encoded XML document. */
    content: string
    /** A json array with all the valid SAML Request Ids that the caller of the API has for the current user. */
    ids: Ids
    /** The name of the realm that should authenticate the SAML response. Useful in cases where many SAML realms are defined. */
    realm?: string
  }
}
