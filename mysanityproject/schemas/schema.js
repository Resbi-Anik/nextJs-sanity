// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "mySchema",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    {
      // This is the display name for the type
      title: "Home",

      // The identifier for this document type used in the api's
      name: "Home",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "string",
        },
      ],
    },

    {
      // This is the display name for the type
      title: "About-Us",

      // The identifier for this document type used in the api's
      name: "About-Us",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "string",
        },
      ],
    },


    {
      // This is the display name for the type
      title: "Events",

      // The identifier for this document type used in the api's
      name: "Events",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "string",
        },
      ],
    },


    {
      // This is the display name for the type
      title: "Programs",

      // The identifier for this document type used in the api's
      name: "Programs",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "string",
        },
      ],
    },



    {
      // This is the display name for the type
      title: "Gallery",

      // The identifier for this document type used in the api's
      name: "Gallery",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "image",
        },
      ],
    },
    

    {
      // This is the display name for the type
      title: "News",

      // The identifier for this document type used in the api's
      name: "News",

      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",

      // Now we proceed to list the fields of our document
      fields: [
        // This document has only one field
        {
          // The display name for this field
          title: "Description",

          // The identifier for this field used in the api's
          name: "Description",

          // The type of this field
          type: "string",
        },

        {
          name: "News",
          // The type of this field
          type: "image",
        },
      ],
    },











  ]),
});
