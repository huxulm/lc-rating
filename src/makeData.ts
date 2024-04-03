import { faker } from '@faker-js/faker';

export type Question = {
  title: string;
  slug: string;
};
export type Contest = {
  ID: number;
  StartTime: number;
  Contest: string;
  TitleSlug: string;
  A: any[];
  B: any[];
  C: any[];
  D: any[];
  A_Rating: number;
  B_Rating: number;
  C_Rating: number;
  D_Rating: number;
  QuerySolution?: (id: any) => any;
};

export function mapContests(data: any[]) {
  return data.map((d: any): Contest => {
    let questions: any[] = d.questions && d.questions.length === 4? d.questions : new Array(4).fill({title: ""})
    return {
      ID: d.contest.id,
      StartTime: d.contest.start_time,
      Contest: d.contest.title || "",
      TitleSlug: d.contest.title_slug,
      A: [ questions[0].title, questions[0].title_slug, questions[0].question_id, questions[0].rating, questions[0]._hash ],
      B: [ questions[1].title, questions[1].title_slug, questions[1].question_id, questions[1].rating, questions[1]._hash ],
      C: [ questions[2].title, questions[2].title_slug, questions[2].question_id, questions[2].rating, questions[2]._hash ],
      D: [ questions[3].title, questions[3].title_slug, questions[3].question_id, questions[3].rating, questions[3]._hash ],
      A_Rating: questions[0].rating,
      B_Rating: questions[1].rating,
      C_Rating: questions[2].rating,
      D_Rating: questions[3].rating,
    };
  });
}


export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr: number[] = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (): Person => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((d): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
