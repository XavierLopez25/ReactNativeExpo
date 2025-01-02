interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 19,
    firstName: "Nathan",
    lastName: "López",
    address: {
      country: "Guatemala",
      houseNo: "615",
    },
  };

  return (
    <>
      <h3>Objectos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
