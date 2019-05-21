/**
 * @flow
 * @relayHash 1fc04998b222cd315e31f3a02e876448
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type stats_pokemon$ref = any;
type viewer_pokemon$ref = any;
export type AppPokemonQueryVariables = {|
  name?: ?string
|};
export type AppPokemonQueryResponse = {|
  +pokemon: ?{|
    +$fragmentRefs: viewer_pokemon$ref & stats_pokemon$ref
  |}
|};
export type AppPokemonQuery = {|
  variables: AppPokemonQueryVariables,
  response: AppPokemonQueryResponse,
|};
*/


/*
query AppPokemonQuery(
  $name: String
) {
  pokemon(name: $name) {
    ...viewer_pokemon
    ...stats_pokemon
    id
  }
}

fragment viewer_pokemon on Pokemon {
  name
  types
  height
  weight
  image
}

fragment stats_pokemon on Pokemon {
  name
  height
  weight
  types
  order
  description
  genus
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "name",
    "variableName": "name"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppPokemonQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemon",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "viewer_pokemon",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "stats_pokemon",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppPokemonQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pokemon",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Pokemon",
        "plural": false,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppPokemonQuery",
    "id": null,
    "text": "query AppPokemonQuery(\n  $name: String\n) {\n  pokemon(name: $name) {\n    ...viewer_pokemon\n    ...stats_pokemon\n    id\n  }\n}\n\nfragment viewer_pokemon on Pokemon {\n  name\n  types\n  height\n  weight\n  image\n}\n\nfragment stats_pokemon on Pokemon {\n  name\n  height\n  weight\n  types\n  order\n  description\n  genus\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5cba040dffd19ae5432a4bcd9b982c7f';
module.exports = node;
