/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type viewer_pokemon$ref: FragmentReference;
declare export opaque type viewer_pokemon$fragmentType: viewer_pokemon$ref;
export type viewer_pokemon = {|
  +name: ?string,
  +types: ?$ReadOnlyArray<?string>,
  +height: ?number,
  +weight: ?number,
  +image: ?string,
  +$refType: viewer_pokemon$ref,
|};
export type viewer_pokemon$data = viewer_pokemon;
export type viewer_pokemon$key = {
  +$data?: viewer_pokemon$data,
  +$fragmentRefs: viewer_pokemon$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "viewer_pokemon",
  "type": "Pokemon",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "types",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "height",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "weight",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '23942272d12b17678ad1437eaae96342';
module.exports = node;
