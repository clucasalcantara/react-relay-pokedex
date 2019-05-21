/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type stats_pokemon$ref: FragmentReference;
declare export opaque type stats_pokemon$fragmentType: stats_pokemon$ref;
export type stats_pokemon = {|
  +name: ?string,
  +height: ?number,
  +weight: ?number,
  +types: ?$ReadOnlyArray<?string>,
  +order: ?number,
  +description: ?string,
  +genus: ?string,
  +$refType: stats_pokemon$ref,
|};
export type stats_pokemon$data = stats_pokemon;
export type stats_pokemon$key = {
  +$data?: stats_pokemon$data,
  +$fragmentRefs: stats_pokemon$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "stats_pokemon",
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
      "name": "types",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "order",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "genus",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6a0fc99a584b392977564ecbb845479a';
module.exports = node;
