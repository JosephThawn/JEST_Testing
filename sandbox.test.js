const sum = require("./sandbox");
test("should  return the sum of a and b", () => {
  expect(sum(2, 2)).toBe(4);
});
describe("check object", () => {
  test("should return a message that says invalid numbers", () => {
    expect(sum(2)).toBe("invalid numbers");
  });

  test("should match object with passed in object", () => {
    const data = { firstName: "Joseph" };
    data["lastName"] = "kim";

    expect(data).toEqual({ firstName: "Joseph", lastName: "kim" });
  });
});

//checking truthieness
test("should test if a value is null", () => {
  const thisIsNull = null;
  expect(thisIsNull).toBeNull();
  expect(thisIsNull).not.toBeTruthy();
});

// //testing separately
// test.only("should test if a value is undefined", () => {
//   const thisIsUndefined = undefined;
//   expect(thisIsUndefined).toBeUndefined();
//   expect(thisIsUndefined).toBeNull();
// });

//number assertion
test("should return a sum greater than 2", () => {
  expect(sum(2, 2)).toBeGreaterThan(3);
});

//using Rejex
test("should expect string to contain the word stop", () => {
  expect("stackoverflow").toMatch(/over/);
});

//checking arrary
describe("check arrays", () => {
  test("should include the word cowboys in array", () => {
    const nflList = ["broncos", "cheifs", "cowboys", "eagles"];
    expect(nflList).toContain("cowboys");
  });

  const shouldErrorOut = () => {
    throw new Error("you did something wrong");
  };
  test("should throw an eror when invoked", () => {
    expect(() => shouldErrorOut()).toThrow(Error);
    expect(() => shouldErrorOut()).toThrow("you did something wrong");
  });
});

//testinng promises
test("should resolve to a value that says go brocos", async () => {
  return expect(Promise.resolve("go brocos")).resolves.toBe("go brocos");
});

//testing async await
test("should resolve to a value that says", async () => {
  await expect(Promise.resolve("go mavs")).resolves.toBe("go mavs");
});

//testing promise  reject
test("shoud reject to a error value", () => {
  return expect(Promise.reject(new Error("cowboys"))).rejects.toThrow(
    "cowboys"
  );
});
// //fechting data example
// test("should return data from the fetch functon", () => {
//   return fetchData().then((data) => {
//     expect(data).toEqual({ firstName: "Tony", lastName: "Kim" });
//   });
// });

//Set up and Tear down

let count = 1;
//beforeEach or afterEach run repeatedly
beforeEach(() => {
  count = 1;
});

//beforeall or afterall run only once
beforeAll(() => {
  count = 1;
});

describe("test numbers", () => {
  test("should return the sum of a and b", () => {
    count++;
    expect(sum(2, 2)).toBe(4);
  });

  test("should return a message that says invalid numbers", () => {
    expect(1).toBe(count);
  });
});

//mock function
test("should return undefiend by default", () => {
  const mock = jest.fn();
  const result = mock("boo cowboys");

  expect(mock).toHaveBeenCalledWith("boo cowboys");
});

//mongoDB testing example start from 1:45 minutes
