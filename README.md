
# About 
This project is a demonstration of Domain Driven Design concepts using Typescript.

It represents a checkout business flow, containing entities *Order, OrderItem, Product and Customer*.

# Domain Driven Design (DDD)
<a href="https://martinfowler.com/bliki/DomainDrivenDesign.html" target="_blank">Here's a summarized definition of DDD by Martin Fowler</a>:
> "Domain Driven Design is  is an approach to software development that centers the development on programming a domain model that has a rich understanding of the processes and rules of a domain." 
<br /> 


If you're developing a large system that has complexity at the heart, then the use of DDD makes sense.

# Project technologies
* Typescript
* <a href="https://jestjs.io/" target="_blank">Jest</a> for Unit Tests
* <a href="https://sequelize.org/" target="_blank">Sequelize</a> - modern ORM for Typescript and Node.js
* SQLite

# Project structure

Entity
Value Objects
Aggregate
Domain Services
Repository
Domain Events
Modules

<b>src</b><br />
&nbsp; | <b>domain</b><br />
&nbsp;&nbsp; || <b>@shared</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>event</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository</b><br />

&nbsp;&nbsp; || <b>checkout</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>entity</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>factory</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>service</b><br />

&nbsp;&nbsp; || <b>customer</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>entity</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>factory</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>value-object</b><br />

&nbsp;&nbsp; || <b>product</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>entity</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>event</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>factory</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>service</b><br />

&nbsp; | <b>infra</b><br />
&nbsp;&nbsp; || <b>customer</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository/sequelize</b><br />
&nbsp;&nbsp; || <b>order</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository/sequelize</b><br />
&nbsp;&nbsp; || <b>product</b><br />
&nbsp;&nbsp;&nbsp; ||| <b>repository/sequelize</b><br />

# Useful project commands
Installing typescript
```
npm i typescript --save-dev
```

Initiating typescript project
```
npx tsc --init
```
 
Build app
```
npx tsc
```

Install & init tslint
```
npx i tslint --save-dev
npx tslint --init
```

Installing & initiate Jest
```
npm install jest --save-dev
npm i -D @types/jest ts-node --save-dev
npx jest --init
```

Installing <a href="https://swc.rs/" target="_blank">SWC</a>, a RUST compiler to execute tests faster
```
npm i -D @swc/jest @swc/cli @swc/core
```

Running tests
```
npm test
```

Installing Guid Id generator
```
npm i uuid @types/uuid
```

Installing Sequelize
```
npm install sequelize reflect-metadata sequelize-typescript
```

Installing SQLite3
```
npm install sqlite3
```

<br />
This project was built and inspired during course on the <a href="https://github.com/devfullcycle/fc-ddd-patterns" target="_blank">Fullcycle platform.</a>
