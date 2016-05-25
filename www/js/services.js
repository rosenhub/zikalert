angular.module('starter.services', [])


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 1,
    name: 'John G. Roberts, Jr.',
    title: 'Chief Justice',
    face: 'img/justices/JRoberts.jpg',
    body: 'Justice Roberts, Jr. was born in Buffalo, New York, January 27, 1955. He married Jane Marie Sullivan in 1996 and they have two children - Josephine and Jack. He received an A.B. from Harvard College in 1976 and a J.D. from Harvard Law School in 1979. He served as a law clerk for Judge Henry J. Friendly of the United States Court of Appeals for the Second Circuit from 1979–1980 and as a law clerk for then-Associate Justice William H. Rehnquist of the Supreme Court of the United States during the 1980 Term. He was Special Assistant to the Attorney General, U.S. Department of Justice from 1981–1982, Associate Counsel to President Ronald Reagan, White House Counsel’s Office from 1982–1986, and Principal Deputy Solicitor General, U.S. Department of Justice from 1989–1993. From 1986–1989 and 1993–2003, he practiced law in Washington, D.C. He was appointed to the United States Court of Appeals for the District of Columbia Circuit in 2003. President George W. Bush nominated him as Chief Justice of the United States, and he took his seat September 29, 2005.',
      bench: '2005',
      by:'Bush',
      picture:'img/justices/roberts.jpg'
  }, 
  // {
  //   id: 2,
  //   name: 'Antonin Scalia',
  //   title: 'Associate Justice',
  //   face: 'img/justices/AScalia2.jpg',
  //   body: 'Justice Scalia was born in Trenton, New Jersey, March 11, 1936. He married Maureen McCarthy and has nine children - Ann Forrest, Eugene, John Francis, Catherine Elisabeth, Mary Clare, Paul David, Matthew, Christopher James, and Margaret Jane. He received his A.B. from Georgetown University and the University of Fribourg, Switzerland, and his LL.B. from Harvard Law School, and was a Sheldon Fellow of Harvard University from 1960–1961. He was in private practice in Cleveland, Ohio from 1961–1967, a Professor of Law at the University of Virginia from 1967–1971, and a Professor of Law at the University of Chicago from 1977–1982, and a Visiting Professor of Law at Georgetown University and Stanford University. He was chairman of the American Bar Association’s Section of Administrative Law, 1981–1982, and its Conference of Section Chairmen, 1982–1983. He served the federal government as General Counsel of the Office of Telecommunications Policy from 1971–1972, Chairman of the Administrative Conference of the United States from 1972–1974, and Assistant Attorney General for the Office of Legal Counsel from 1974–1977. He was appointed Judge of the United States Court of Appeals for the District of Columbia Circuit in 1982. President Reagan nominated him as an Associate Justice of the Supreme Court, and he took his seat September 26, 1986.'
  // }, 
  {
    id: 3,
    name: 'Anthony M. Kennedy',
    title: 'Associate Justice',
    face: 'img/justices/AKennedy.jpg',
    body: 'Justice Kennedy was born in Sacramento, California, July 23, 1936. He married Mary Davis and has three children. He received his B.A. from Stanford University and the London School of Economics, and his LL.B. from Harvard Law School. He was in private practice in San Francisco, California from 1961–1963, as well as in Sacramento, California from 1963–1975. From 1965 to 1988, he was a Professor of Constitutional Law at the McGeorge School of Law, University of the Pacific. He has served in numerous positions during his career, including a member of the California Army National Guard in 1961, the board of the Federal Judicial Center from 1987–1988, and two committees of the Judicial Conference of the United States: the Advisory Panel on Financial Disclosure Reports and Judicial Activities, subsequently renamed the Advisory Committee on Codes of Conduct, from 1979–1987, and the Committee on Pacific Territories from 1979–1990, which he chaired from 1982–1990. He was appointed to the United States Court of Appeals for the Ninth Circuit in 1975. President Reagan nominated him as an Associate Justice of the Supreme Court, and he took his seat February 18, 1988.',
      bench: '1988',
      by:'Reagan',
      picture: 'img/justices/kennedy.jpg'
  }, {
    id: 4,
    name: 'Clarence Thomas',
    title: 'Associate Justice',
    face: 'img/justices/CThomas.jpg',
    body: 'Justice Thomas was born in the Pinpoint community near Savannah, Georgia on June 23, 1948. He attended Conception Seminary from 1967-1968 and received an A.B., cum laude, from Holy Cross College in 1971 and a J.D. from Yale Law School in 1974. He was admitted to law practice in Missouri in 1974, and served as an Assistant Attorney General of Missouri, 1974-1977; an attorney with the Monsanto Company, 1977-1979; and Legislative Assistant to Senator John Danforth, 1979-1981. From 1981-1982 he served as Assistant Secretary for Civil Rights, U.S. Department of Education, and as Chairman of the U.S. Equal Employment Opportunity Commission, 1982-1990. From 1990-1991, he served as a Judge on the United States Court of Appeals for the District of Columbia Circuit. President Bush nominated him as an Associate Justice of the Supreme Court and he took his seat October 23, 1991. He married Virginia Lamp on May 30, 1987 and has one child, Jamal Adeen by a previous marriage.',
      bench: '1991',
      by:'Bush',
      picture: 'img/justices/thomas.jpg'
  }, {
    id: 5,
    name: 'Ruth Bader Ginsburg',
    title: 'Associate Justice',
    face: 'img/justices/RGinsburg2.jpg',
    body: 'Justice Ginsburg was born in Brooklyn, New York, March 15, 1933. She married Martin D. Ginsburg in 1954, and has a daughter, Jane, and a son, James. She received her B.A. from Cornell University, attended Harvard Law School, and received her LL.B. from Columbia Law School. She served as a law clerk to the Honorable Edmund L. Palmieri, Judge of the United States District Court for the Southern District of New York, from 1959–1961. From 1961–1963, she was a research associate and then associate director of the Columbia Law School Project on International Procedure. She was a Professor of Law at Rutgers University School of Law from 1963–1972, and Columbia Law School from 1972–1980, and a fellow at the Center for Advanced Study in the Behavioral Sciences in Stanford, California from 1977–1978. In 1971, she was instrumental in launching the Women’s Rights Project of the American Civil Liberties Union, and served as the ACLU’s General Counsel from 1973–1980, and on the National Board of Directors from 1974–1980. She was appointed a Judge of the United States Court of Appeals for the District of Columbia Circuit in 1980. President Clinton nominated her as an Associate Justice of the Supreme Court, and she took her seat August 10, 1993.',
      bench: '1993',
      by:'Clinton',
      picture: 'img/justices/ginsburg.jpg'
  }, {
    id: 6, 
    name: 'Stephen G. Breyer',
    title: 'Associate Justice',
    face: 'img/justices/SBreyer.jpg',
    body: 'Justice Breyer was born in San Francisco, California, August 15, 1938. He married Joanna Hare in 1967, and has three children - Chloe, Nell, and Michael. He received an A.B. from Stanford University, a B.A. from Magdalen College, Oxford, and an LL.B. from Harvard Law School. He served as a law clerk to Justice Arthur Goldberg of the Supreme Court of the United States during the 1964 Term, as a Special Assistant to the Assistant U.S. Attorney General for Antitrust, 1965–1967, as an Assistant Special Prosecutor of the Watergate Special Prosecution Force, 1973, as Special Counsel of the U.S. Senate Judiciary Committee, 1974–1975, and as Chief Counsel of the committee, 1979–1980. He was an Assistant Professor, Professor of Law, and Lecturer at Harvard Law School, 1967–1994, a Professor at the Harvard University Kennedy School of Government, 1977–1980, and a Visiting Professor at the College of Law, Sydney, Australia and at the University of Rome. From 1980–1990, he served as a Judge of the United States Court of Appeals for the First Circuit, and as its Chief Judge, 1990–1994. He also served as a member of the Judicial Conference of the United States, 1990–1994, and of the United States Sentencing Commission, 1985–1989. President Clinton nominated him as an Associate Justice of the Supreme Court, and he took his seat August 3, 1994.',
      bench: '1994',
      by:'Clinton',
      picture: 'img/justices/breyer.jpg'
  }, {
    id: 7,
    name: 'Samuel Anthony Alito, Jr.',
    title: 'Associate Justice',
    face: 'img/justices/SAlito.jpg',
    body: 'Justice Alito was born in Trenton, New Jersey, April 1, 1950. He married Martha-Ann Bomgardner in 1985, and has two children - Philip and Laura. He served as a law clerk for Leonard I. Garth of the United States Court of Appeals for the Third Circuit from 1976–1977. He was Assistant U.S. Attorney, District of New Jersey, 1977–1981, Assistant to the Solicitor General, U.S. Department of Justice, 1981–1985, Deputy Assistant Attorney General, U.S. Department of Justice, 1985–1987, and U.S. Attorney, District of New Jersey, 1987–1990. He was appointed to the United States Court of Appeals for the Third Circuit in 1990. President George W. Bush nominated him as an Associate Justice of the Supreme Court, and he took his seat January 31, 2006.',
      bench: '2006',
      by:'Bush',
      picture: 'img/justices/alito.jpg'
  }, {
    id: 8,
    name: 'Sonia Sotomayor',
    title: 'Associate Justice',
    face: 'img/justices/SSotomayor.jpg',
    body: 'Justice Sotomayor was born in Bronx, New York, on June 25, 1954. She earned a B.A. in 1976 from Princeton University, graduating summa cum laude and receiving the university\'s highest academic honor. In 1979, she earned a J.D. from Yale Law School where she served as an editor of the Yale Law Journal. She served as Assistant District Attorney in the New York County District Attorney\'s Office from 1979–1984. She then litigated international commercial matters in New York City at Pavia & Harcourt, where she served as an associate and then partner from 1984–1992. In 1991, President George H.W. Bush nominated her to the U.S. District Court, Southern District of New York, and she served in that role from 1992–1998. She served as a judge on the United States Court of Appeals for the Second Circuit from 1998–2009. President Barack Obama nominated her as an Associate Justice of the Supreme Court on May 26, 2009, and she assumed this role August 8, 2009.',
      bench: '2009',
      by:'Obama',
      picture: 'img/justices/sotomayor.jpg'
  }, {
    id: 9,
    name: 'Elena Kagan',
    title: 'Associate Justice',
    face: 'img/justices/EKagan.jpg',
    body: 'Elena Kagan was born April 28, 1960 in New York, NY. She is an Associate Justice of theSupreme Court of the United States. Kagan is the Court\'s 112th justice and fourth female justice. After attending Princeton, Oxford, and Harvard Law School, she completed federal Court of Appeals and Supreme Court clerkships. She began her career as a professor at the University of Chicago Law School, leaving to serve as Associate White House Counsel, and later as policy adviser, under President Clinton. President Barack Obama appointed her Solicitor General on January 26, 2009. On May 10, 2010, Obama nominated her to the Supreme Court to fill the vacancy from the impending retirement of Justice John Paul Stevens. After Senate confirmation, Kagan was sworn in on August 7, 2010, by Chief Justice John G. Roberts. Kagan\'s formal investiture ceremony before a special sitting of the United States Supreme Court took place on October 1, 2010.',
    bench: '2010',
    by:'Obama',
    picture: 'img/justices/kagan.jpg'
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
