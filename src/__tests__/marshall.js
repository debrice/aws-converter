var marshall = require("../converter").marshall;

describe("converter marshall", () => {
  it("should marshall a simple model", () => {
    var streamImage = {
      foo: { BOOL: true },
      bar: { N: "32.23" },
      baz: { S: "foo bar" },
      fooz: {
        L: [
          {
            S: "foo",
          },
          {
            S: "bar",
          },
        ],
      },
    };

    var model = {
      foo: true,
      bar: 32.23,
      baz: "foo bar",
      fooz: ["foo", "bar"],
    };

    expect(marshall(model)).toEqual(streamImage);
  });

  it("should marshall a complex model", () => {
    var streamImage = {
      country: {
        S: "United States",
      },
      number1: {
        N: "0",
      },
      gender: {
        S: "male",
      },
      city: {
        S: "Los Angeles",
      },
      displayName: {
        S: "Master Yoda",
      },
      latitude: {
        N: "31.65468478",
      },
      number2: {
        N: "4",
      },
      createdOn: {
        S: "2017-07-25T23:26:14.545Z",
      },
      number3: {
        N: "2",
      },
      aBoolean: {
        BOOL: true,
      },
      number5: {
        N: "8",
      },
      number6: {
        N: "0",
      },
      countryCode: {
        S: "US",
      },
      id: {
        S: "54c52d33-9c02-43e0-a481-84d9f8cda4a0",
      },
      arrayOfM: {
        L: [
          {
            M: {
              countryCode: {
                S: "FR",
              },
              name: {
                S: "France",
              },
              type: {
                S: "country",
              },
              createdOn: {
                S: "2017-07-26T23:31:47.609Z",
              },
            },
          },
          {
            M: {
              countryCode: {
                S: "US",
              },
              name: {
                S: "United States of America",
              },
              type: {
                S: "country",
              },
              createdOn: {
                S: "2017-07-25T23:31:47.609Z",
              },
            },
          },
        ],
      },
      number7: {
        N: "11",
      },
      longitude: {
        N: "-114.15465",
      },
      mileage: {
        N: "30",
      },
      profilePictureUrl: {
        S: "https://penpals-media-profile-bucket.s3.amazonaws.com/type_image_54c52d33-9c02-43e0-a481-84d9f8cda4a0",
      },
      sentFromCountries: {
        L: [
          {
            S: "US",
          },
        ],
      },
      friendCount: {
        N: "1",
      },
      enqueued: {
        BOOL: true,
      },
      phoneNumber: {
        S: "+000987987",
      },
      dob: {
        S: "1913-07-26T00:27:33.000Z",
      },
      interests: {
        L: [
          {
            S: "pen pals",
          },
          {
            S: "force",
          },
        ],
      },
      lastConversationReceived: {
        N: "0",
      },
      status: {
        S: "active",
      },
    };

    var model = {
      number5: 8,
      aBoolean: true,
      status: "active",
      lastConversationReceived: 0,
      country: "United States",
      city: "Los Angeles",
      displayName: "Master Yoda",
      friendCount: 1,
      interests: ["pen pals", "force"],
      dob: "1913-07-26T00:27:33.000Z",
      id: "54c52d33-9c02-43e0-a481-84d9f8cda4a0",
      latitude: 31.65468478,
      mileage: 30,
      phoneNumber: "+000987987",
      enqueued: true,
      arrayOfM: [
        {
          name: "France",
          type: "country",
          createdOn: "2017-07-26T23:31:47.609Z",
          countryCode: "FR",
        },
        {
          name: "United States of America",
          type: "country",
          createdOn: "2017-07-25T23:31:47.609Z",
          countryCode: "US",
        },
      ],
      countryCode: "US",
      gender: "male",
      number6: 0,
      profilePictureUrl: "https://penpals-media-profile-bucket.s3.amazonaws.com/type_image_54c52d33-9c02-43e0-a481-84d9f8cda4a0",
      sentFromCountries: ["US"],
      number1: 0,
      number3: 2,
      number7: 11,
      createdOn: "2017-07-25T23:26:14.545Z",
      longitude: -114.15465,
      number2: 4,
    };

    expect(marshall(model)).toEqual(streamImage);
  });
});
