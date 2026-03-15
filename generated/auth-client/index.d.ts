
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model LoginAccessLog
 * 
 */
export type LoginAccessLog = $Result.DefaultSelection<Prisma.$LoginAccessLogPayload>
/**
 * Model LoginSecurityConfig
 * 
 */
export type LoginSecurityConfig = $Result.DefaultSelection<Prisma.$LoginSecurityConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const WorkMode: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

export type WorkMode = (typeof WorkMode)[keyof typeof WorkMode]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type WorkMode = $Enums.WorkMode

export const WorkMode: typeof $Enums.WorkMode

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginAccessLog`: Exposes CRUD operations for the **LoginAccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginAccessLogs
    * const loginAccessLogs = await prisma.loginAccessLog.findMany()
    * ```
    */
  get loginAccessLog(): Prisma.LoginAccessLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loginSecurityConfig`: Exposes CRUD operations for the **LoginSecurityConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoginSecurityConfigs
    * const loginSecurityConfigs = await prisma.loginSecurityConfig.findMany()
    * ```
    */
  get loginSecurityConfig(): Prisma.LoginSecurityConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AuthSession: 'AuthSession',
    LoginAccessLog: 'LoginAccessLog',
    LoginSecurityConfig: 'LoginSecurityConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "authSession" | "loginAccessLog" | "loginSecurityConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      LoginAccessLog: {
        payload: Prisma.$LoginAccessLogPayload<ExtArgs>
        fields: Prisma.LoginAccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginAccessLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginAccessLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          findFirst: {
            args: Prisma.LoginAccessLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginAccessLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          findMany: {
            args: Prisma.LoginAccessLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>[]
          }
          create: {
            args: Prisma.LoginAccessLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          createMany: {
            args: Prisma.LoginAccessLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginAccessLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>[]
          }
          delete: {
            args: Prisma.LoginAccessLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          update: {
            args: Prisma.LoginAccessLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          deleteMany: {
            args: Prisma.LoginAccessLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginAccessLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginAccessLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>[]
          }
          upsert: {
            args: Prisma.LoginAccessLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginAccessLogPayload>
          }
          aggregate: {
            args: Prisma.LoginAccessLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginAccessLog>
          }
          groupBy: {
            args: Prisma.LoginAccessLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginAccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginAccessLogCountArgs<ExtArgs>
            result: $Utils.Optional<LoginAccessLogCountAggregateOutputType> | number
          }
        }
      }
      LoginSecurityConfig: {
        payload: Prisma.$LoginSecurityConfigPayload<ExtArgs>
        fields: Prisma.LoginSecurityConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginSecurityConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginSecurityConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          findFirst: {
            args: Prisma.LoginSecurityConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginSecurityConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          findMany: {
            args: Prisma.LoginSecurityConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>[]
          }
          create: {
            args: Prisma.LoginSecurityConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          createMany: {
            args: Prisma.LoginSecurityConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoginSecurityConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>[]
          }
          delete: {
            args: Prisma.LoginSecurityConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          update: {
            args: Prisma.LoginSecurityConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          deleteMany: {
            args: Prisma.LoginSecurityConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginSecurityConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoginSecurityConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>[]
          }
          upsert: {
            args: Prisma.LoginSecurityConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginSecurityConfigPayload>
          }
          aggregate: {
            args: Prisma.LoginSecurityConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoginSecurityConfig>
          }
          groupBy: {
            args: Prisma.LoginSecurityConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginSecurityConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginSecurityConfigCountArgs<ExtArgs>
            result: $Utils.Optional<LoginSecurityConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    authSession?: AuthSessionOmit
    loginAccessLog?: LoginAccessLogOmit
    loginSecurityConfig?: LoginSecurityConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authSessions: number
    loginAccessLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authSessions?: boolean | UserCountOutputTypeCountAuthSessionsArgs
    loginAccessLogs?: boolean | UserCountOutputTypeCountLoginAccessLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoginAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginAccessLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    allowedOffDaysPerMonth: number | null
    annualLeaveQuota: number | null
  }

  export type UserSumAggregateOutputType = {
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    allowedOffDaysPerMonth: number | null
    annualLeaveQuota: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    address: string | null
    department: string | null
    workStartTime: string | null
    workEndTime: string | null
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    breakPolicyJson: string | null
    workMode: $Enums.WorkMode | null
    allowedOffDaysPerMonth: number | null
    annualLeaveQuota: number | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    fullName: string | null
    email: string | null
    phone: string | null
    address: string | null
    department: string | null
    workStartTime: string | null
    workEndTime: string | null
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    breakPolicyJson: string | null
    workMode: $Enums.WorkMode | null
    allowedOffDaysPerMonth: number | null
    annualLeaveQuota: number | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    fullName: number
    email: number
    phone: number
    address: number
    department: number
    workStartTime: number
    workEndTime: number
    lateGraceMinutes: number
    earlyLeaveGraceMinutes: number
    breakPolicyJson: number
    workMode: number
    allowedOffDaysPerMonth: number
    annualLeaveQuota: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    allowedOffDaysPerMonth?: true
    annualLeaveQuota?: true
  }

  export type UserSumAggregateInputType = {
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    allowedOffDaysPerMonth?: true
    annualLeaveQuota?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    department?: true
    workStartTime?: true
    workEndTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    workMode?: true
    allowedOffDaysPerMonth?: true
    annualLeaveQuota?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    department?: true
    workStartTime?: true
    workEndTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    workMode?: true
    allowedOffDaysPerMonth?: true
    annualLeaveQuota?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    fullName?: true
    email?: true
    phone?: true
    address?: true
    department?: true
    workStartTime?: true
    workEndTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    workMode?: true
    allowedOffDaysPerMonth?: true
    annualLeaveQuota?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    fullName: string
    email: string | null
    phone: string | null
    address: string | null
    department: string | null
    workStartTime: string | null
    workEndTime: string | null
    lateGraceMinutes: number
    earlyLeaveGraceMinutes: number
    breakPolicyJson: string
    workMode: $Enums.WorkMode
    allowedOffDaysPerMonth: number
    annualLeaveQuota: number
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    department?: boolean
    workStartTime?: boolean
    workEndTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    workMode?: boolean
    allowedOffDaysPerMonth?: boolean
    annualLeaveQuota?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    loginAccessLogs?: boolean | User$loginAccessLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    department?: boolean
    workStartTime?: boolean
    workEndTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    workMode?: boolean
    allowedOffDaysPerMonth?: boolean
    annualLeaveQuota?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    department?: boolean
    workStartTime?: boolean
    workEndTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    workMode?: boolean
    allowedOffDaysPerMonth?: boolean
    annualLeaveQuota?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    department?: boolean
    workStartTime?: boolean
    workEndTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    workMode?: boolean
    allowedOffDaysPerMonth?: boolean
    annualLeaveQuota?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "fullName" | "email" | "phone" | "address" | "department" | "workStartTime" | "workEndTime" | "lateGraceMinutes" | "earlyLeaveGraceMinutes" | "breakPolicyJson" | "workMode" | "allowedOffDaysPerMonth" | "annualLeaveQuota" | "role" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    loginAccessLogs?: boolean | User$loginAccessLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      authSessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      loginAccessLogs: Prisma.$LoginAccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      fullName: string
      email: string | null
      phone: string | null
      address: string | null
      department: string | null
      workStartTime: string | null
      workEndTime: string | null
      lateGraceMinutes: number
      earlyLeaveGraceMinutes: number
      breakPolicyJson: string
      workMode: $Enums.WorkMode
      allowedOffDaysPerMonth: number
      annualLeaveQuota: number
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    authSessions<T extends User$authSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$authSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loginAccessLogs<T extends User$loginAccessLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$loginAccessLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly workStartTime: FieldRef<"User", 'String'>
    readonly workEndTime: FieldRef<"User", 'String'>
    readonly lateGraceMinutes: FieldRef<"User", 'Int'>
    readonly earlyLeaveGraceMinutes: FieldRef<"User", 'Int'>
    readonly breakPolicyJson: FieldRef<"User", 'String'>
    readonly workMode: FieldRef<"User", 'WorkMode'>
    readonly allowedOffDaysPerMonth: FieldRef<"User", 'Int'>
    readonly annualLeaveQuota: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.authSessions
   */
  export type User$authSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * User.loginAccessLogs
   */
  export type User$loginAccessLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    where?: LoginAccessLogWhereInput
    orderBy?: LoginAccessLogOrderByWithRelationInput | LoginAccessLogOrderByWithRelationInput[]
    cursor?: LoginAccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoginAccessLogScalarFieldEnum | LoginAccessLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    ipAddress: string | null
    userAgent: string | null
    deviceKey: string | null
    isSharedIp: boolean | null
    isSharedDevice: boolean | null
    appInstance: string | null
    revokedAt: Date | null
    revokedReason: string | null
    expiresAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    ipAddress: string | null
    userAgent: string | null
    deviceKey: string | null
    isSharedIp: boolean | null
    isSharedDevice: boolean | null
    appInstance: string | null
    revokedAt: Date | null
    revokedReason: string | null
    expiresAt: Date | null
    lastSeenAt: Date | null
    createdAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    ipAddress: number
    userAgent: number
    deviceKey: number
    isSharedIp: number
    isSharedDevice: number
    appInstance: number
    revokedAt: number
    revokedReason: number
    expiresAt: number
    lastSeenAt: number
    createdAt: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    revokedAt?: true
    revokedReason?: true
    expiresAt?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    revokedAt?: true
    revokedReason?: true
    expiresAt?: true
    lastSeenAt?: true
    createdAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    revokedAt?: true
    revokedReason?: true
    expiresAt?: true
    lastSeenAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    ipAddress: string
    userAgent: string | null
    deviceKey: string
    isSharedIp: boolean
    isSharedDevice: boolean
    appInstance: string | null
    revokedAt: Date | null
    revokedReason: string | null
    expiresAt: Date
    lastSeenAt: Date
    createdAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    expiresAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    expiresAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    expiresAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    revokedAt?: boolean
    revokedReason?: boolean
    expiresAt?: boolean
    lastSeenAt?: boolean
    createdAt?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "ipAddress" | "userAgent" | "deviceKey" | "isSharedIp" | "isSharedDevice" | "appInstance" | "revokedAt" | "revokedReason" | "expiresAt" | "lastSeenAt" | "createdAt", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      ipAddress: string
      userAgent: string | null
      deviceKey: string
      isSharedIp: boolean
      isSharedDevice: boolean
      appInstance: string | null
      revokedAt: Date | null
      revokedReason: string | null
      expiresAt: Date
      lastSeenAt: Date
      createdAt: Date
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
    readonly tokenHash: FieldRef<"AuthSession", 'String'>
    readonly ipAddress: FieldRef<"AuthSession", 'String'>
    readonly userAgent: FieldRef<"AuthSession", 'String'>
    readonly deviceKey: FieldRef<"AuthSession", 'String'>
    readonly isSharedIp: FieldRef<"AuthSession", 'Boolean'>
    readonly isSharedDevice: FieldRef<"AuthSession", 'Boolean'>
    readonly appInstance: FieldRef<"AuthSession", 'String'>
    readonly revokedAt: FieldRef<"AuthSession", 'DateTime'>
    readonly revokedReason: FieldRef<"AuthSession", 'String'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly lastSeenAt: FieldRef<"AuthSession", 'DateTime'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model LoginAccessLog
   */

  export type AggregateLoginAccessLog = {
    _count: LoginAccessLogCountAggregateOutputType | null
    _min: LoginAccessLogMinAggregateOutputType | null
    _max: LoginAccessLogMaxAggregateOutputType | null
  }

  export type LoginAccessLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    usernameInput: string | null
    ipAddress: string | null
    userAgent: string | null
    deviceKey: string | null
    success: boolean | null
    blockedReason: string | null
    failedReason: string | null
    isSharedIp: boolean | null
    isSharedDevice: boolean | null
    appInstance: string | null
    createdAt: Date | null
  }

  export type LoginAccessLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    usernameInput: string | null
    ipAddress: string | null
    userAgent: string | null
    deviceKey: string | null
    success: boolean | null
    blockedReason: string | null
    failedReason: string | null
    isSharedIp: boolean | null
    isSharedDevice: boolean | null
    appInstance: string | null
    createdAt: Date | null
  }

  export type LoginAccessLogCountAggregateOutputType = {
    id: number
    userId: number
    usernameInput: number
    ipAddress: number
    userAgent: number
    deviceKey: number
    success: number
    blockedReason: number
    failedReason: number
    isSharedIp: number
    isSharedDevice: number
    appInstance: number
    createdAt: number
    _all: number
  }


  export type LoginAccessLogMinAggregateInputType = {
    id?: true
    userId?: true
    usernameInput?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    success?: true
    blockedReason?: true
    failedReason?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    createdAt?: true
  }

  export type LoginAccessLogMaxAggregateInputType = {
    id?: true
    userId?: true
    usernameInput?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    success?: true
    blockedReason?: true
    failedReason?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    createdAt?: true
  }

  export type LoginAccessLogCountAggregateInputType = {
    id?: true
    userId?: true
    usernameInput?: true
    ipAddress?: true
    userAgent?: true
    deviceKey?: true
    success?: true
    blockedReason?: true
    failedReason?: true
    isSharedIp?: true
    isSharedDevice?: true
    appInstance?: true
    createdAt?: true
    _all?: true
  }

  export type LoginAccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginAccessLog to aggregate.
     */
    where?: LoginAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAccessLogs to fetch.
     */
    orderBy?: LoginAccessLogOrderByWithRelationInput | LoginAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginAccessLogs
    **/
    _count?: true | LoginAccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginAccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginAccessLogMaxAggregateInputType
  }

  export type GetLoginAccessLogAggregateType<T extends LoginAccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginAccessLog[P]>
      : GetScalarType<T[P], AggregateLoginAccessLog[P]>
  }




  export type LoginAccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginAccessLogWhereInput
    orderBy?: LoginAccessLogOrderByWithAggregationInput | LoginAccessLogOrderByWithAggregationInput[]
    by: LoginAccessLogScalarFieldEnum[] | LoginAccessLogScalarFieldEnum
    having?: LoginAccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginAccessLogCountAggregateInputType | true
    _min?: LoginAccessLogMinAggregateInputType
    _max?: LoginAccessLogMaxAggregateInputType
  }

  export type LoginAccessLogGroupByOutputType = {
    id: string
    userId: string | null
    usernameInput: string
    ipAddress: string
    userAgent: string | null
    deviceKey: string
    success: boolean
    blockedReason: string | null
    failedReason: string | null
    isSharedIp: boolean
    isSharedDevice: boolean
    appInstance: string | null
    createdAt: Date
    _count: LoginAccessLogCountAggregateOutputType | null
    _min: LoginAccessLogMinAggregateOutputType | null
    _max: LoginAccessLogMaxAggregateOutputType | null
  }

  type GetLoginAccessLogGroupByPayload<T extends LoginAccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginAccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginAccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginAccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], LoginAccessLogGroupByOutputType[P]>
        }
      >
    >


  export type LoginAccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usernameInput?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    success?: boolean
    blockedReason?: boolean
    failedReason?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    createdAt?: boolean
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["loginAccessLog"]>

  export type LoginAccessLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usernameInput?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    success?: boolean
    blockedReason?: boolean
    failedReason?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    createdAt?: boolean
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["loginAccessLog"]>

  export type LoginAccessLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usernameInput?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    success?: boolean
    blockedReason?: boolean
    failedReason?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    createdAt?: boolean
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["loginAccessLog"]>

  export type LoginAccessLogSelectScalar = {
    id?: boolean
    userId?: boolean
    usernameInput?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    deviceKey?: boolean
    success?: boolean
    blockedReason?: boolean
    failedReason?: boolean
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: boolean
    createdAt?: boolean
  }

  export type LoginAccessLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "usernameInput" | "ipAddress" | "userAgent" | "deviceKey" | "success" | "blockedReason" | "failedReason" | "isSharedIp" | "isSharedDevice" | "appInstance" | "createdAt", ExtArgs["result"]["loginAccessLog"]>
  export type LoginAccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }
  export type LoginAccessLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }
  export type LoginAccessLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LoginAccessLog$userArgs<ExtArgs>
  }

  export type $LoginAccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginAccessLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      usernameInput: string
      ipAddress: string
      userAgent: string | null
      deviceKey: string
      success: boolean
      blockedReason: string | null
      failedReason: string | null
      isSharedIp: boolean
      isSharedDevice: boolean
      appInstance: string | null
      createdAt: Date
    }, ExtArgs["result"]["loginAccessLog"]>
    composites: {}
  }

  type LoginAccessLogGetPayload<S extends boolean | null | undefined | LoginAccessLogDefaultArgs> = $Result.GetResult<Prisma.$LoginAccessLogPayload, S>

  type LoginAccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginAccessLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginAccessLogCountAggregateInputType | true
    }

  export interface LoginAccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginAccessLog'], meta: { name: 'LoginAccessLog' } }
    /**
     * Find zero or one LoginAccessLog that matches the filter.
     * @param {LoginAccessLogFindUniqueArgs} args - Arguments to find a LoginAccessLog
     * @example
     * // Get one LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginAccessLogFindUniqueArgs>(args: SelectSubset<T, LoginAccessLogFindUniqueArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginAccessLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginAccessLogFindUniqueOrThrowArgs} args - Arguments to find a LoginAccessLog
     * @example
     * // Get one LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginAccessLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginAccessLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginAccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogFindFirstArgs} args - Arguments to find a LoginAccessLog
     * @example
     * // Get one LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginAccessLogFindFirstArgs>(args?: SelectSubset<T, LoginAccessLogFindFirstArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginAccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogFindFirstOrThrowArgs} args - Arguments to find a LoginAccessLog
     * @example
     * // Get one LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginAccessLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginAccessLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginAccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginAccessLogs
     * const loginAccessLogs = await prisma.loginAccessLog.findMany()
     * 
     * // Get first 10 LoginAccessLogs
     * const loginAccessLogs = await prisma.loginAccessLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginAccessLogWithIdOnly = await prisma.loginAccessLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginAccessLogFindManyArgs>(args?: SelectSubset<T, LoginAccessLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginAccessLog.
     * @param {LoginAccessLogCreateArgs} args - Arguments to create a LoginAccessLog.
     * @example
     * // Create one LoginAccessLog
     * const LoginAccessLog = await prisma.loginAccessLog.create({
     *   data: {
     *     // ... data to create a LoginAccessLog
     *   }
     * })
     * 
     */
    create<T extends LoginAccessLogCreateArgs>(args: SelectSubset<T, LoginAccessLogCreateArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginAccessLogs.
     * @param {LoginAccessLogCreateManyArgs} args - Arguments to create many LoginAccessLogs.
     * @example
     * // Create many LoginAccessLogs
     * const loginAccessLog = await prisma.loginAccessLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginAccessLogCreateManyArgs>(args?: SelectSubset<T, LoginAccessLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginAccessLogs and returns the data saved in the database.
     * @param {LoginAccessLogCreateManyAndReturnArgs} args - Arguments to create many LoginAccessLogs.
     * @example
     * // Create many LoginAccessLogs
     * const loginAccessLog = await prisma.loginAccessLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginAccessLogs and only return the `id`
     * const loginAccessLogWithIdOnly = await prisma.loginAccessLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginAccessLogCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginAccessLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginAccessLog.
     * @param {LoginAccessLogDeleteArgs} args - Arguments to delete one LoginAccessLog.
     * @example
     * // Delete one LoginAccessLog
     * const LoginAccessLog = await prisma.loginAccessLog.delete({
     *   where: {
     *     // ... filter to delete one LoginAccessLog
     *   }
     * })
     * 
     */
    delete<T extends LoginAccessLogDeleteArgs>(args: SelectSubset<T, LoginAccessLogDeleteArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginAccessLog.
     * @param {LoginAccessLogUpdateArgs} args - Arguments to update one LoginAccessLog.
     * @example
     * // Update one LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginAccessLogUpdateArgs>(args: SelectSubset<T, LoginAccessLogUpdateArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginAccessLogs.
     * @param {LoginAccessLogDeleteManyArgs} args - Arguments to filter LoginAccessLogs to delete.
     * @example
     * // Delete a few LoginAccessLogs
     * const { count } = await prisma.loginAccessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginAccessLogDeleteManyArgs>(args?: SelectSubset<T, LoginAccessLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginAccessLogs
     * const loginAccessLog = await prisma.loginAccessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginAccessLogUpdateManyArgs>(args: SelectSubset<T, LoginAccessLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginAccessLogs and returns the data updated in the database.
     * @param {LoginAccessLogUpdateManyAndReturnArgs} args - Arguments to update many LoginAccessLogs.
     * @example
     * // Update many LoginAccessLogs
     * const loginAccessLog = await prisma.loginAccessLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginAccessLogs and only return the `id`
     * const loginAccessLogWithIdOnly = await prisma.loginAccessLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginAccessLogUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginAccessLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginAccessLog.
     * @param {LoginAccessLogUpsertArgs} args - Arguments to update or create a LoginAccessLog.
     * @example
     * // Update or create a LoginAccessLog
     * const loginAccessLog = await prisma.loginAccessLog.upsert({
     *   create: {
     *     // ... data to create a LoginAccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginAccessLog we want to update
     *   }
     * })
     */
    upsert<T extends LoginAccessLogUpsertArgs>(args: SelectSubset<T, LoginAccessLogUpsertArgs<ExtArgs>>): Prisma__LoginAccessLogClient<$Result.GetResult<Prisma.$LoginAccessLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginAccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogCountArgs} args - Arguments to filter LoginAccessLogs to count.
     * @example
     * // Count the number of LoginAccessLogs
     * const count = await prisma.loginAccessLog.count({
     *   where: {
     *     // ... the filter for the LoginAccessLogs we want to count
     *   }
     * })
    **/
    count<T extends LoginAccessLogCountArgs>(
      args?: Subset<T, LoginAccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginAccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginAccessLogAggregateArgs>(args: Subset<T, LoginAccessLogAggregateArgs>): Prisma.PrismaPromise<GetLoginAccessLogAggregateType<T>>

    /**
     * Group by LoginAccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAccessLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginAccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginAccessLogGroupByArgs['orderBy'] }
        : { orderBy?: LoginAccessLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginAccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginAccessLog model
   */
  readonly fields: LoginAccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginAccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginAccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LoginAccessLog$userArgs<ExtArgs> = {}>(args?: Subset<T, LoginAccessLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginAccessLog model
   */
  interface LoginAccessLogFieldRefs {
    readonly id: FieldRef<"LoginAccessLog", 'String'>
    readonly userId: FieldRef<"LoginAccessLog", 'String'>
    readonly usernameInput: FieldRef<"LoginAccessLog", 'String'>
    readonly ipAddress: FieldRef<"LoginAccessLog", 'String'>
    readonly userAgent: FieldRef<"LoginAccessLog", 'String'>
    readonly deviceKey: FieldRef<"LoginAccessLog", 'String'>
    readonly success: FieldRef<"LoginAccessLog", 'Boolean'>
    readonly blockedReason: FieldRef<"LoginAccessLog", 'String'>
    readonly failedReason: FieldRef<"LoginAccessLog", 'String'>
    readonly isSharedIp: FieldRef<"LoginAccessLog", 'Boolean'>
    readonly isSharedDevice: FieldRef<"LoginAccessLog", 'Boolean'>
    readonly appInstance: FieldRef<"LoginAccessLog", 'String'>
    readonly createdAt: FieldRef<"LoginAccessLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginAccessLog findUnique
   */
  export type LoginAccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginAccessLog to fetch.
     */
    where: LoginAccessLogWhereUniqueInput
  }

  /**
   * LoginAccessLog findUniqueOrThrow
   */
  export type LoginAccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginAccessLog to fetch.
     */
    where: LoginAccessLogWhereUniqueInput
  }

  /**
   * LoginAccessLog findFirst
   */
  export type LoginAccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginAccessLog to fetch.
     */
    where?: LoginAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAccessLogs to fetch.
     */
    orderBy?: LoginAccessLogOrderByWithRelationInput | LoginAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginAccessLogs.
     */
    cursor?: LoginAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginAccessLogs.
     */
    distinct?: LoginAccessLogScalarFieldEnum | LoginAccessLogScalarFieldEnum[]
  }

  /**
   * LoginAccessLog findFirstOrThrow
   */
  export type LoginAccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginAccessLog to fetch.
     */
    where?: LoginAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAccessLogs to fetch.
     */
    orderBy?: LoginAccessLogOrderByWithRelationInput | LoginAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginAccessLogs.
     */
    cursor?: LoginAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginAccessLogs.
     */
    distinct?: LoginAccessLogScalarFieldEnum | LoginAccessLogScalarFieldEnum[]
  }

  /**
   * LoginAccessLog findMany
   */
  export type LoginAccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter, which LoginAccessLogs to fetch.
     */
    where?: LoginAccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginAccessLogs to fetch.
     */
    orderBy?: LoginAccessLogOrderByWithRelationInput | LoginAccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginAccessLogs.
     */
    cursor?: LoginAccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginAccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginAccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginAccessLogs.
     */
    distinct?: LoginAccessLogScalarFieldEnum | LoginAccessLogScalarFieldEnum[]
  }

  /**
   * LoginAccessLog create
   */
  export type LoginAccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LoginAccessLog.
     */
    data: XOR<LoginAccessLogCreateInput, LoginAccessLogUncheckedCreateInput>
  }

  /**
   * LoginAccessLog createMany
   */
  export type LoginAccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginAccessLogs.
     */
    data: LoginAccessLogCreateManyInput | LoginAccessLogCreateManyInput[]
  }

  /**
   * LoginAccessLog createManyAndReturn
   */
  export type LoginAccessLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * The data used to create many LoginAccessLogs.
     */
    data: LoginAccessLogCreateManyInput | LoginAccessLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginAccessLog update
   */
  export type LoginAccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LoginAccessLog.
     */
    data: XOR<LoginAccessLogUpdateInput, LoginAccessLogUncheckedUpdateInput>
    /**
     * Choose, which LoginAccessLog to update.
     */
    where: LoginAccessLogWhereUniqueInput
  }

  /**
   * LoginAccessLog updateMany
   */
  export type LoginAccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginAccessLogs.
     */
    data: XOR<LoginAccessLogUpdateManyMutationInput, LoginAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which LoginAccessLogs to update
     */
    where?: LoginAccessLogWhereInput
    /**
     * Limit how many LoginAccessLogs to update.
     */
    limit?: number
  }

  /**
   * LoginAccessLog updateManyAndReturn
   */
  export type LoginAccessLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * The data used to update LoginAccessLogs.
     */
    data: XOR<LoginAccessLogUpdateManyMutationInput, LoginAccessLogUncheckedUpdateManyInput>
    /**
     * Filter which LoginAccessLogs to update
     */
    where?: LoginAccessLogWhereInput
    /**
     * Limit how many LoginAccessLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoginAccessLog upsert
   */
  export type LoginAccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LoginAccessLog to update in case it exists.
     */
    where: LoginAccessLogWhereUniqueInput
    /**
     * In case the LoginAccessLog found by the `where` argument doesn't exist, create a new LoginAccessLog with this data.
     */
    create: XOR<LoginAccessLogCreateInput, LoginAccessLogUncheckedCreateInput>
    /**
     * In case the LoginAccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginAccessLogUpdateInput, LoginAccessLogUncheckedUpdateInput>
  }

  /**
   * LoginAccessLog delete
   */
  export type LoginAccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
    /**
     * Filter which LoginAccessLog to delete.
     */
    where: LoginAccessLogWhereUniqueInput
  }

  /**
   * LoginAccessLog deleteMany
   */
  export type LoginAccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginAccessLogs to delete
     */
    where?: LoginAccessLogWhereInput
    /**
     * Limit how many LoginAccessLogs to delete.
     */
    limit?: number
  }

  /**
   * LoginAccessLog.user
   */
  export type LoginAccessLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LoginAccessLog without action
   */
  export type LoginAccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginAccessLog
     */
    select?: LoginAccessLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginAccessLog
     */
    omit?: LoginAccessLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoginAccessLogInclude<ExtArgs> | null
  }


  /**
   * Model LoginSecurityConfig
   */

  export type AggregateLoginSecurityConfig = {
    _count: LoginSecurityConfigCountAggregateOutputType | null
    _avg: LoginSecurityConfigAvgAggregateOutputType | null
    _sum: LoginSecurityConfigSumAggregateOutputType | null
    _min: LoginSecurityConfigMinAggregateOutputType | null
    _max: LoginSecurityConfigMaxAggregateOutputType | null
  }

  export type LoginSecurityConfigAvgAggregateOutputType = {
    id: number | null
  }

  export type LoginSecurityConfigSumAggregateOutputType = {
    id: number | null
  }

  export type LoginSecurityConfigMinAggregateOutputType = {
    id: number | null
    enforceSingleDevicePerAccount: boolean | null
    enforceSingleAccountPerDeviceIp: boolean | null
    blockMobilePhoneLogin: boolean | null
    updatedAt: Date | null
  }

  export type LoginSecurityConfigMaxAggregateOutputType = {
    id: number | null
    enforceSingleDevicePerAccount: boolean | null
    enforceSingleAccountPerDeviceIp: boolean | null
    blockMobilePhoneLogin: boolean | null
    updatedAt: Date | null
  }

  export type LoginSecurityConfigCountAggregateOutputType = {
    id: number
    enforceSingleDevicePerAccount: number
    enforceSingleAccountPerDeviceIp: number
    blockMobilePhoneLogin: number
    updatedAt: number
    _all: number
  }


  export type LoginSecurityConfigAvgAggregateInputType = {
    id?: true
  }

  export type LoginSecurityConfigSumAggregateInputType = {
    id?: true
  }

  export type LoginSecurityConfigMinAggregateInputType = {
    id?: true
    enforceSingleDevicePerAccount?: true
    enforceSingleAccountPerDeviceIp?: true
    blockMobilePhoneLogin?: true
    updatedAt?: true
  }

  export type LoginSecurityConfigMaxAggregateInputType = {
    id?: true
    enforceSingleDevicePerAccount?: true
    enforceSingleAccountPerDeviceIp?: true
    blockMobilePhoneLogin?: true
    updatedAt?: true
  }

  export type LoginSecurityConfigCountAggregateInputType = {
    id?: true
    enforceSingleDevicePerAccount?: true
    enforceSingleAccountPerDeviceIp?: true
    blockMobilePhoneLogin?: true
    updatedAt?: true
    _all?: true
  }

  export type LoginSecurityConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginSecurityConfig to aggregate.
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSecurityConfigs to fetch.
     */
    orderBy?: LoginSecurityConfigOrderByWithRelationInput | LoginSecurityConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginSecurityConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSecurityConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSecurityConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoginSecurityConfigs
    **/
    _count?: true | LoginSecurityConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginSecurityConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSecurityConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginSecurityConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginSecurityConfigMaxAggregateInputType
  }

  export type GetLoginSecurityConfigAggregateType<T extends LoginSecurityConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateLoginSecurityConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoginSecurityConfig[P]>
      : GetScalarType<T[P], AggregateLoginSecurityConfig[P]>
  }




  export type LoginSecurityConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginSecurityConfigWhereInput
    orderBy?: LoginSecurityConfigOrderByWithAggregationInput | LoginSecurityConfigOrderByWithAggregationInput[]
    by: LoginSecurityConfigScalarFieldEnum[] | LoginSecurityConfigScalarFieldEnum
    having?: LoginSecurityConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginSecurityConfigCountAggregateInputType | true
    _avg?: LoginSecurityConfigAvgAggregateInputType
    _sum?: LoginSecurityConfigSumAggregateInputType
    _min?: LoginSecurityConfigMinAggregateInputType
    _max?: LoginSecurityConfigMaxAggregateInputType
  }

  export type LoginSecurityConfigGroupByOutputType = {
    id: number
    enforceSingleDevicePerAccount: boolean
    enforceSingleAccountPerDeviceIp: boolean
    blockMobilePhoneLogin: boolean
    updatedAt: Date
    _count: LoginSecurityConfigCountAggregateOutputType | null
    _avg: LoginSecurityConfigAvgAggregateOutputType | null
    _sum: LoginSecurityConfigSumAggregateOutputType | null
    _min: LoginSecurityConfigMinAggregateOutputType | null
    _max: LoginSecurityConfigMaxAggregateOutputType | null
  }

  type GetLoginSecurityConfigGroupByPayload<T extends LoginSecurityConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginSecurityConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginSecurityConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginSecurityConfigGroupByOutputType[P]>
            : GetScalarType<T[P], LoginSecurityConfigGroupByOutputType[P]>
        }
      >
    >


  export type LoginSecurityConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["loginSecurityConfig"]>

  export type LoginSecurityConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["loginSecurityConfig"]>

  export type LoginSecurityConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["loginSecurityConfig"]>

  export type LoginSecurityConfigSelectScalar = {
    id?: boolean
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: boolean
  }

  export type LoginSecurityConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enforceSingleDevicePerAccount" | "enforceSingleAccountPerDeviceIp" | "blockMobilePhoneLogin" | "updatedAt", ExtArgs["result"]["loginSecurityConfig"]>

  export type $LoginSecurityConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoginSecurityConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enforceSingleDevicePerAccount: boolean
      enforceSingleAccountPerDeviceIp: boolean
      blockMobilePhoneLogin: boolean
      updatedAt: Date
    }, ExtArgs["result"]["loginSecurityConfig"]>
    composites: {}
  }

  type LoginSecurityConfigGetPayload<S extends boolean | null | undefined | LoginSecurityConfigDefaultArgs> = $Result.GetResult<Prisma.$LoginSecurityConfigPayload, S>

  type LoginSecurityConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginSecurityConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginSecurityConfigCountAggregateInputType | true
    }

  export interface LoginSecurityConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoginSecurityConfig'], meta: { name: 'LoginSecurityConfig' } }
    /**
     * Find zero or one LoginSecurityConfig that matches the filter.
     * @param {LoginSecurityConfigFindUniqueArgs} args - Arguments to find a LoginSecurityConfig
     * @example
     * // Get one LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginSecurityConfigFindUniqueArgs>(args: SelectSubset<T, LoginSecurityConfigFindUniqueArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoginSecurityConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginSecurityConfigFindUniqueOrThrowArgs} args - Arguments to find a LoginSecurityConfig
     * @example
     * // Get one LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginSecurityConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginSecurityConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginSecurityConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigFindFirstArgs} args - Arguments to find a LoginSecurityConfig
     * @example
     * // Get one LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginSecurityConfigFindFirstArgs>(args?: SelectSubset<T, LoginSecurityConfigFindFirstArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoginSecurityConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigFindFirstOrThrowArgs} args - Arguments to find a LoginSecurityConfig
     * @example
     * // Get one LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginSecurityConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginSecurityConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoginSecurityConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoginSecurityConfigs
     * const loginSecurityConfigs = await prisma.loginSecurityConfig.findMany()
     * 
     * // Get first 10 LoginSecurityConfigs
     * const loginSecurityConfigs = await prisma.loginSecurityConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginSecurityConfigWithIdOnly = await prisma.loginSecurityConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginSecurityConfigFindManyArgs>(args?: SelectSubset<T, LoginSecurityConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoginSecurityConfig.
     * @param {LoginSecurityConfigCreateArgs} args - Arguments to create a LoginSecurityConfig.
     * @example
     * // Create one LoginSecurityConfig
     * const LoginSecurityConfig = await prisma.loginSecurityConfig.create({
     *   data: {
     *     // ... data to create a LoginSecurityConfig
     *   }
     * })
     * 
     */
    create<T extends LoginSecurityConfigCreateArgs>(args: SelectSubset<T, LoginSecurityConfigCreateArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoginSecurityConfigs.
     * @param {LoginSecurityConfigCreateManyArgs} args - Arguments to create many LoginSecurityConfigs.
     * @example
     * // Create many LoginSecurityConfigs
     * const loginSecurityConfig = await prisma.loginSecurityConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginSecurityConfigCreateManyArgs>(args?: SelectSubset<T, LoginSecurityConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoginSecurityConfigs and returns the data saved in the database.
     * @param {LoginSecurityConfigCreateManyAndReturnArgs} args - Arguments to create many LoginSecurityConfigs.
     * @example
     * // Create many LoginSecurityConfigs
     * const loginSecurityConfig = await prisma.loginSecurityConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoginSecurityConfigs and only return the `id`
     * const loginSecurityConfigWithIdOnly = await prisma.loginSecurityConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoginSecurityConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, LoginSecurityConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoginSecurityConfig.
     * @param {LoginSecurityConfigDeleteArgs} args - Arguments to delete one LoginSecurityConfig.
     * @example
     * // Delete one LoginSecurityConfig
     * const LoginSecurityConfig = await prisma.loginSecurityConfig.delete({
     *   where: {
     *     // ... filter to delete one LoginSecurityConfig
     *   }
     * })
     * 
     */
    delete<T extends LoginSecurityConfigDeleteArgs>(args: SelectSubset<T, LoginSecurityConfigDeleteArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoginSecurityConfig.
     * @param {LoginSecurityConfigUpdateArgs} args - Arguments to update one LoginSecurityConfig.
     * @example
     * // Update one LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginSecurityConfigUpdateArgs>(args: SelectSubset<T, LoginSecurityConfigUpdateArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoginSecurityConfigs.
     * @param {LoginSecurityConfigDeleteManyArgs} args - Arguments to filter LoginSecurityConfigs to delete.
     * @example
     * // Delete a few LoginSecurityConfigs
     * const { count } = await prisma.loginSecurityConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginSecurityConfigDeleteManyArgs>(args?: SelectSubset<T, LoginSecurityConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginSecurityConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoginSecurityConfigs
     * const loginSecurityConfig = await prisma.loginSecurityConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginSecurityConfigUpdateManyArgs>(args: SelectSubset<T, LoginSecurityConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoginSecurityConfigs and returns the data updated in the database.
     * @param {LoginSecurityConfigUpdateManyAndReturnArgs} args - Arguments to update many LoginSecurityConfigs.
     * @example
     * // Update many LoginSecurityConfigs
     * const loginSecurityConfig = await prisma.loginSecurityConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoginSecurityConfigs and only return the `id`
     * const loginSecurityConfigWithIdOnly = await prisma.loginSecurityConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoginSecurityConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, LoginSecurityConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoginSecurityConfig.
     * @param {LoginSecurityConfigUpsertArgs} args - Arguments to update or create a LoginSecurityConfig.
     * @example
     * // Update or create a LoginSecurityConfig
     * const loginSecurityConfig = await prisma.loginSecurityConfig.upsert({
     *   create: {
     *     // ... data to create a LoginSecurityConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoginSecurityConfig we want to update
     *   }
     * })
     */
    upsert<T extends LoginSecurityConfigUpsertArgs>(args: SelectSubset<T, LoginSecurityConfigUpsertArgs<ExtArgs>>): Prisma__LoginSecurityConfigClient<$Result.GetResult<Prisma.$LoginSecurityConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoginSecurityConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigCountArgs} args - Arguments to filter LoginSecurityConfigs to count.
     * @example
     * // Count the number of LoginSecurityConfigs
     * const count = await prisma.loginSecurityConfig.count({
     *   where: {
     *     // ... the filter for the LoginSecurityConfigs we want to count
     *   }
     * })
    **/
    count<T extends LoginSecurityConfigCountArgs>(
      args?: Subset<T, LoginSecurityConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginSecurityConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoginSecurityConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginSecurityConfigAggregateArgs>(args: Subset<T, LoginSecurityConfigAggregateArgs>): Prisma.PrismaPromise<GetLoginSecurityConfigAggregateType<T>>

    /**
     * Group by LoginSecurityConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginSecurityConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginSecurityConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginSecurityConfigGroupByArgs['orderBy'] }
        : { orderBy?: LoginSecurityConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginSecurityConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginSecurityConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoginSecurityConfig model
   */
  readonly fields: LoginSecurityConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoginSecurityConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginSecurityConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoginSecurityConfig model
   */
  interface LoginSecurityConfigFieldRefs {
    readonly id: FieldRef<"LoginSecurityConfig", 'Int'>
    readonly enforceSingleDevicePerAccount: FieldRef<"LoginSecurityConfig", 'Boolean'>
    readonly enforceSingleAccountPerDeviceIp: FieldRef<"LoginSecurityConfig", 'Boolean'>
    readonly blockMobilePhoneLogin: FieldRef<"LoginSecurityConfig", 'Boolean'>
    readonly updatedAt: FieldRef<"LoginSecurityConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoginSecurityConfig findUnique
   */
  export type LoginSecurityConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter, which LoginSecurityConfig to fetch.
     */
    where: LoginSecurityConfigWhereUniqueInput
  }

  /**
   * LoginSecurityConfig findUniqueOrThrow
   */
  export type LoginSecurityConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter, which LoginSecurityConfig to fetch.
     */
    where: LoginSecurityConfigWhereUniqueInput
  }

  /**
   * LoginSecurityConfig findFirst
   */
  export type LoginSecurityConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter, which LoginSecurityConfig to fetch.
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSecurityConfigs to fetch.
     */
    orderBy?: LoginSecurityConfigOrderByWithRelationInput | LoginSecurityConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginSecurityConfigs.
     */
    cursor?: LoginSecurityConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSecurityConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSecurityConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginSecurityConfigs.
     */
    distinct?: LoginSecurityConfigScalarFieldEnum | LoginSecurityConfigScalarFieldEnum[]
  }

  /**
   * LoginSecurityConfig findFirstOrThrow
   */
  export type LoginSecurityConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter, which LoginSecurityConfig to fetch.
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSecurityConfigs to fetch.
     */
    orderBy?: LoginSecurityConfigOrderByWithRelationInput | LoginSecurityConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoginSecurityConfigs.
     */
    cursor?: LoginSecurityConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSecurityConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSecurityConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginSecurityConfigs.
     */
    distinct?: LoginSecurityConfigScalarFieldEnum | LoginSecurityConfigScalarFieldEnum[]
  }

  /**
   * LoginSecurityConfig findMany
   */
  export type LoginSecurityConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter, which LoginSecurityConfigs to fetch.
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoginSecurityConfigs to fetch.
     */
    orderBy?: LoginSecurityConfigOrderByWithRelationInput | LoginSecurityConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoginSecurityConfigs.
     */
    cursor?: LoginSecurityConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoginSecurityConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoginSecurityConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoginSecurityConfigs.
     */
    distinct?: LoginSecurityConfigScalarFieldEnum | LoginSecurityConfigScalarFieldEnum[]
  }

  /**
   * LoginSecurityConfig create
   */
  export type LoginSecurityConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a LoginSecurityConfig.
     */
    data: XOR<LoginSecurityConfigCreateInput, LoginSecurityConfigUncheckedCreateInput>
  }

  /**
   * LoginSecurityConfig createMany
   */
  export type LoginSecurityConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoginSecurityConfigs.
     */
    data: LoginSecurityConfigCreateManyInput | LoginSecurityConfigCreateManyInput[]
  }

  /**
   * LoginSecurityConfig createManyAndReturn
   */
  export type LoginSecurityConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * The data used to create many LoginSecurityConfigs.
     */
    data: LoginSecurityConfigCreateManyInput | LoginSecurityConfigCreateManyInput[]
  }

  /**
   * LoginSecurityConfig update
   */
  export type LoginSecurityConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a LoginSecurityConfig.
     */
    data: XOR<LoginSecurityConfigUpdateInput, LoginSecurityConfigUncheckedUpdateInput>
    /**
     * Choose, which LoginSecurityConfig to update.
     */
    where: LoginSecurityConfigWhereUniqueInput
  }

  /**
   * LoginSecurityConfig updateMany
   */
  export type LoginSecurityConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoginSecurityConfigs.
     */
    data: XOR<LoginSecurityConfigUpdateManyMutationInput, LoginSecurityConfigUncheckedUpdateManyInput>
    /**
     * Filter which LoginSecurityConfigs to update
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * Limit how many LoginSecurityConfigs to update.
     */
    limit?: number
  }

  /**
   * LoginSecurityConfig updateManyAndReturn
   */
  export type LoginSecurityConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * The data used to update LoginSecurityConfigs.
     */
    data: XOR<LoginSecurityConfigUpdateManyMutationInput, LoginSecurityConfigUncheckedUpdateManyInput>
    /**
     * Filter which LoginSecurityConfigs to update
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * Limit how many LoginSecurityConfigs to update.
     */
    limit?: number
  }

  /**
   * LoginSecurityConfig upsert
   */
  export type LoginSecurityConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the LoginSecurityConfig to update in case it exists.
     */
    where: LoginSecurityConfigWhereUniqueInput
    /**
     * In case the LoginSecurityConfig found by the `where` argument doesn't exist, create a new LoginSecurityConfig with this data.
     */
    create: XOR<LoginSecurityConfigCreateInput, LoginSecurityConfigUncheckedCreateInput>
    /**
     * In case the LoginSecurityConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginSecurityConfigUpdateInput, LoginSecurityConfigUncheckedUpdateInput>
  }

  /**
   * LoginSecurityConfig delete
   */
  export type LoginSecurityConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
    /**
     * Filter which LoginSecurityConfig to delete.
     */
    where: LoginSecurityConfigWhereUniqueInput
  }

  /**
   * LoginSecurityConfig deleteMany
   */
  export type LoginSecurityConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoginSecurityConfigs to delete
     */
    where?: LoginSecurityConfigWhereInput
    /**
     * Limit how many LoginSecurityConfigs to delete.
     */
    limit?: number
  }

  /**
   * LoginSecurityConfig without action
   */
  export type LoginSecurityConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoginSecurityConfig
     */
    select?: LoginSecurityConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoginSecurityConfig
     */
    omit?: LoginSecurityConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    department: 'department',
    workStartTime: 'workStartTime',
    workEndTime: 'workEndTime',
    lateGraceMinutes: 'lateGraceMinutes',
    earlyLeaveGraceMinutes: 'earlyLeaveGraceMinutes',
    breakPolicyJson: 'breakPolicyJson',
    workMode: 'workMode',
    allowedOffDaysPerMonth: 'allowedOffDaysPerMonth',
    annualLeaveQuota: 'annualLeaveQuota',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    deviceKey: 'deviceKey',
    isSharedIp: 'isSharedIp',
    isSharedDevice: 'isSharedDevice',
    appInstance: 'appInstance',
    revokedAt: 'revokedAt',
    revokedReason: 'revokedReason',
    expiresAt: 'expiresAt',
    lastSeenAt: 'lastSeenAt',
    createdAt: 'createdAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const LoginAccessLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    usernameInput: 'usernameInput',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    deviceKey: 'deviceKey',
    success: 'success',
    blockedReason: 'blockedReason',
    failedReason: 'failedReason',
    isSharedIp: 'isSharedIp',
    isSharedDevice: 'isSharedDevice',
    appInstance: 'appInstance',
    createdAt: 'createdAt'
  };

  export type LoginAccessLogScalarFieldEnum = (typeof LoginAccessLogScalarFieldEnum)[keyof typeof LoginAccessLogScalarFieldEnum]


  export const LoginSecurityConfigScalarFieldEnum: {
    id: 'id',
    enforceSingleDevicePerAccount: 'enforceSingleDevicePerAccount',
    enforceSingleAccountPerDeviceIp: 'enforceSingleAccountPerDeviceIp',
    blockMobilePhoneLogin: 'blockMobilePhoneLogin',
    updatedAt: 'updatedAt'
  };

  export type LoginSecurityConfigScalarFieldEnum = (typeof LoginSecurityConfigScalarFieldEnum)[keyof typeof LoginSecurityConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'WorkMode'
   */
  export type EnumWorkModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkMode'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    workStartTime?: StringNullableFilter<"User"> | string | null
    workEndTime?: StringNullableFilter<"User"> | string | null
    lateGraceMinutes?: IntFilter<"User"> | number
    earlyLeaveGraceMinutes?: IntFilter<"User"> | number
    breakPolicyJson?: StringFilter<"User"> | string
    workMode?: EnumWorkModeFilter<"User"> | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFilter<"User"> | number
    annualLeaveQuota?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    authSessions?: AuthSessionListRelationFilter
    loginAccessLogs?: LoginAccessLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workStartTime?: SortOrderInput | SortOrder
    workEndTime?: SortOrderInput | SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    workMode?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    authSessions?: AuthSessionOrderByRelationAggregateInput
    loginAccessLogs?: LoginAccessLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    department?: StringNullableFilter<"User"> | string | null
    workStartTime?: StringNullableFilter<"User"> | string | null
    workEndTime?: StringNullableFilter<"User"> | string | null
    lateGraceMinutes?: IntFilter<"User"> | number
    earlyLeaveGraceMinutes?: IntFilter<"User"> | number
    breakPolicyJson?: StringFilter<"User"> | string
    workMode?: EnumWorkModeFilter<"User"> | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFilter<"User"> | number
    annualLeaveQuota?: IntFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    authSessions?: AuthSessionListRelationFilter
    loginAccessLogs?: LoginAccessLogListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    workStartTime?: SortOrderInput | SortOrder
    workEndTime?: SortOrderInput | SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    workMode?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    workStartTime?: StringNullableWithAggregatesFilter<"User"> | string | null
    workEndTime?: StringNullableWithAggregatesFilter<"User"> | string | null
    lateGraceMinutes?: IntWithAggregatesFilter<"User"> | number
    earlyLeaveGraceMinutes?: IntWithAggregatesFilter<"User"> | number
    breakPolicyJson?: StringWithAggregatesFilter<"User"> | string
    workMode?: EnumWorkModeWithAggregatesFilter<"User"> | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntWithAggregatesFilter<"User"> | number
    annualLeaveQuota?: IntWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    tokenHash?: StringFilter<"AuthSession"> | string
    ipAddress?: StringFilter<"AuthSession"> | string
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    deviceKey?: StringFilter<"AuthSession"> | string
    isSharedIp?: BoolFilter<"AuthSession"> | boolean
    isSharedDevice?: BoolFilter<"AuthSession"> | boolean
    appInstance?: StringNullableFilter<"AuthSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokedReason?: StringNullableFilter<"AuthSession"> | string | null
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastSeenAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceKey?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedReason?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: StringFilter<"AuthSession"> | string
    ipAddress?: StringFilter<"AuthSession"> | string
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    deviceKey?: StringFilter<"AuthSession"> | string
    isSharedIp?: BoolFilter<"AuthSession"> | boolean
    isSharedDevice?: BoolFilter<"AuthSession"> | boolean
    appInstance?: StringNullableFilter<"AuthSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokedReason?: StringNullableFilter<"AuthSession"> | string | null
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastSeenAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceKey?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    revokedReason?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
    tokenHash?: StringWithAggregatesFilter<"AuthSession"> | string
    ipAddress?: StringWithAggregatesFilter<"AuthSession"> | string
    userAgent?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    deviceKey?: StringWithAggregatesFilter<"AuthSession"> | string
    isSharedIp?: BoolWithAggregatesFilter<"AuthSession"> | boolean
    isSharedDevice?: BoolWithAggregatesFilter<"AuthSession"> | boolean
    appInstance?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"AuthSession"> | Date | string | null
    revokedReason?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
  }

  export type LoginAccessLogWhereInput = {
    AND?: LoginAccessLogWhereInput | LoginAccessLogWhereInput[]
    OR?: LoginAccessLogWhereInput[]
    NOT?: LoginAccessLogWhereInput | LoginAccessLogWhereInput[]
    id?: StringFilter<"LoginAccessLog"> | string
    userId?: StringNullableFilter<"LoginAccessLog"> | string | null
    usernameInput?: StringFilter<"LoginAccessLog"> | string
    ipAddress?: StringFilter<"LoginAccessLog"> | string
    userAgent?: StringNullableFilter<"LoginAccessLog"> | string | null
    deviceKey?: StringFilter<"LoginAccessLog"> | string
    success?: BoolFilter<"LoginAccessLog"> | boolean
    blockedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    failedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    isSharedIp?: BoolFilter<"LoginAccessLog"> | boolean
    isSharedDevice?: BoolFilter<"LoginAccessLog"> | boolean
    appInstance?: StringNullableFilter<"LoginAccessLog"> | string | null
    createdAt?: DateTimeFilter<"LoginAccessLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LoginAccessLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    usernameInput?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceKey?: SortOrder
    success?: SortOrder
    blockedReason?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LoginAccessLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoginAccessLogWhereInput | LoginAccessLogWhereInput[]
    OR?: LoginAccessLogWhereInput[]
    NOT?: LoginAccessLogWhereInput | LoginAccessLogWhereInput[]
    userId?: StringNullableFilter<"LoginAccessLog"> | string | null
    usernameInput?: StringFilter<"LoginAccessLog"> | string
    ipAddress?: StringFilter<"LoginAccessLog"> | string
    userAgent?: StringNullableFilter<"LoginAccessLog"> | string | null
    deviceKey?: StringFilter<"LoginAccessLog"> | string
    success?: BoolFilter<"LoginAccessLog"> | boolean
    blockedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    failedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    isSharedIp?: BoolFilter<"LoginAccessLog"> | boolean
    isSharedDevice?: BoolFilter<"LoginAccessLog"> | boolean
    appInstance?: StringNullableFilter<"LoginAccessLog"> | string | null
    createdAt?: DateTimeFilter<"LoginAccessLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LoginAccessLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    usernameInput?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    deviceKey?: SortOrder
    success?: SortOrder
    blockedReason?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LoginAccessLogCountOrderByAggregateInput
    _max?: LoginAccessLogMaxOrderByAggregateInput
    _min?: LoginAccessLogMinOrderByAggregateInput
  }

  export type LoginAccessLogScalarWhereWithAggregatesInput = {
    AND?: LoginAccessLogScalarWhereWithAggregatesInput | LoginAccessLogScalarWhereWithAggregatesInput[]
    OR?: LoginAccessLogScalarWhereWithAggregatesInput[]
    NOT?: LoginAccessLogScalarWhereWithAggregatesInput | LoginAccessLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoginAccessLog"> | string
    userId?: StringNullableWithAggregatesFilter<"LoginAccessLog"> | string | null
    usernameInput?: StringWithAggregatesFilter<"LoginAccessLog"> | string
    ipAddress?: StringWithAggregatesFilter<"LoginAccessLog"> | string
    userAgent?: StringNullableWithAggregatesFilter<"LoginAccessLog"> | string | null
    deviceKey?: StringWithAggregatesFilter<"LoginAccessLog"> | string
    success?: BoolWithAggregatesFilter<"LoginAccessLog"> | boolean
    blockedReason?: StringNullableWithAggregatesFilter<"LoginAccessLog"> | string | null
    failedReason?: StringNullableWithAggregatesFilter<"LoginAccessLog"> | string | null
    isSharedIp?: BoolWithAggregatesFilter<"LoginAccessLog"> | boolean
    isSharedDevice?: BoolWithAggregatesFilter<"LoginAccessLog"> | boolean
    appInstance?: StringNullableWithAggregatesFilter<"LoginAccessLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LoginAccessLog"> | Date | string
  }

  export type LoginSecurityConfigWhereInput = {
    AND?: LoginSecurityConfigWhereInput | LoginSecurityConfigWhereInput[]
    OR?: LoginSecurityConfigWhereInput[]
    NOT?: LoginSecurityConfigWhereInput | LoginSecurityConfigWhereInput[]
    id?: IntFilter<"LoginSecurityConfig"> | number
    enforceSingleDevicePerAccount?: BoolFilter<"LoginSecurityConfig"> | boolean
    enforceSingleAccountPerDeviceIp?: BoolFilter<"LoginSecurityConfig"> | boolean
    blockMobilePhoneLogin?: BoolFilter<"LoginSecurityConfig"> | boolean
    updatedAt?: DateTimeFilter<"LoginSecurityConfig"> | Date | string
  }

  export type LoginSecurityConfigOrderByWithRelationInput = {
    id?: SortOrder
    enforceSingleDevicePerAccount?: SortOrder
    enforceSingleAccountPerDeviceIp?: SortOrder
    blockMobilePhoneLogin?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoginSecurityConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LoginSecurityConfigWhereInput | LoginSecurityConfigWhereInput[]
    OR?: LoginSecurityConfigWhereInput[]
    NOT?: LoginSecurityConfigWhereInput | LoginSecurityConfigWhereInput[]
    enforceSingleDevicePerAccount?: BoolFilter<"LoginSecurityConfig"> | boolean
    enforceSingleAccountPerDeviceIp?: BoolFilter<"LoginSecurityConfig"> | boolean
    blockMobilePhoneLogin?: BoolFilter<"LoginSecurityConfig"> | boolean
    updatedAt?: DateTimeFilter<"LoginSecurityConfig"> | Date | string
  }, "id">

  export type LoginSecurityConfigOrderByWithAggregationInput = {
    id?: SortOrder
    enforceSingleDevicePerAccount?: SortOrder
    enforceSingleAccountPerDeviceIp?: SortOrder
    blockMobilePhoneLogin?: SortOrder
    updatedAt?: SortOrder
    _count?: LoginSecurityConfigCountOrderByAggregateInput
    _avg?: LoginSecurityConfigAvgOrderByAggregateInput
    _max?: LoginSecurityConfigMaxOrderByAggregateInput
    _min?: LoginSecurityConfigMinOrderByAggregateInput
    _sum?: LoginSecurityConfigSumOrderByAggregateInput
  }

  export type LoginSecurityConfigScalarWhereWithAggregatesInput = {
    AND?: LoginSecurityConfigScalarWhereWithAggregatesInput | LoginSecurityConfigScalarWhereWithAggregatesInput[]
    OR?: LoginSecurityConfigScalarWhereWithAggregatesInput[]
    NOT?: LoginSecurityConfigScalarWhereWithAggregatesInput | LoginSecurityConfigScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LoginSecurityConfig"> | number
    enforceSingleDevicePerAccount?: BoolWithAggregatesFilter<"LoginSecurityConfig"> | boolean
    enforceSingleAccountPerDeviceIp?: BoolWithAggregatesFilter<"LoginSecurityConfig"> | boolean
    blockMobilePhoneLogin?: BoolWithAggregatesFilter<"LoginSecurityConfig"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"LoginSecurityConfig"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    loginAccessLogs?: LoginAccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    loginAccessLogs?: LoginAccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    loginAccessLogs?: LoginAccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    loginAccessLogs?: LoginAccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthSessionCreateInput = {
    id?: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogCreateInput = {
    id?: string
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLoginAccessLogsInput
  }

  export type LoginAccessLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
  }

  export type LoginAccessLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLoginAccessLogsNestedInput
  }

  export type LoginAccessLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogCreateManyInput = {
    id?: string
    userId?: string | null
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
  }

  export type LoginAccessLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSecurityConfigCreateInput = {
    id: number
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: Date | string
  }

  export type LoginSecurityConfigUncheckedCreateInput = {
    id: number
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: Date | string
  }

  export type LoginSecurityConfigUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enforceSingleDevicePerAccount?: BoolFieldUpdateOperationsInput | boolean
    enforceSingleAccountPerDeviceIp?: BoolFieldUpdateOperationsInput | boolean
    blockMobilePhoneLogin?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSecurityConfigUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enforceSingleDevicePerAccount?: BoolFieldUpdateOperationsInput | boolean
    enforceSingleAccountPerDeviceIp?: BoolFieldUpdateOperationsInput | boolean
    blockMobilePhoneLogin?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSecurityConfigCreateManyInput = {
    id: number
    enforceSingleDevicePerAccount?: boolean
    enforceSingleAccountPerDeviceIp?: boolean
    blockMobilePhoneLogin?: boolean
    updatedAt?: Date | string
  }

  export type LoginSecurityConfigUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    enforceSingleDevicePerAccount?: BoolFieldUpdateOperationsInput | boolean
    enforceSingleAccountPerDeviceIp?: BoolFieldUpdateOperationsInput | boolean
    blockMobilePhoneLogin?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginSecurityConfigUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enforceSingleDevicePerAccount?: BoolFieldUpdateOperationsInput | boolean
    enforceSingleAccountPerDeviceIp?: BoolFieldUpdateOperationsInput | boolean
    blockMobilePhoneLogin?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWorkModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[]
    notIn?: $Enums.WorkMode[]
    not?: NestedEnumWorkModeFilter<$PrismaModel> | $Enums.WorkMode
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type LoginAccessLogListRelationFilter = {
    every?: LoginAccessLogWhereInput
    some?: LoginAccessLogWhereInput
    none?: LoginAccessLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoginAccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    department?: SortOrder
    workStartTime?: SortOrder
    workEndTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    workMode?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    department?: SortOrder
    workStartTime?: SortOrder
    workEndTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    workMode?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    department?: SortOrder
    workStartTime?: SortOrder
    workEndTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    workMode?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    allowedOffDaysPerMonth?: SortOrder
    annualLeaveQuota?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWorkModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[]
    notIn?: $Enums.WorkMode[]
    not?: NestedEnumWorkModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkModeFilter<$PrismaModel>
    _max?: NestedEnumWorkModeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    expiresAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    expiresAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    revokedAt?: SortOrder
    revokedReason?: SortOrder
    expiresAt?: SortOrder
    lastSeenAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LoginAccessLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usernameInput?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    success?: SortOrder
    blockedReason?: SortOrder
    failedReason?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginAccessLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usernameInput?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    success?: SortOrder
    blockedReason?: SortOrder
    failedReason?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginAccessLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usernameInput?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    deviceKey?: SortOrder
    success?: SortOrder
    blockedReason?: SortOrder
    failedReason?: SortOrder
    isSharedIp?: SortOrder
    isSharedDevice?: SortOrder
    appInstance?: SortOrder
    createdAt?: SortOrder
  }

  export type LoginSecurityConfigCountOrderByAggregateInput = {
    id?: SortOrder
    enforceSingleDevicePerAccount?: SortOrder
    enforceSingleAccountPerDeviceIp?: SortOrder
    blockMobilePhoneLogin?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoginSecurityConfigAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoginSecurityConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    enforceSingleDevicePerAccount?: SortOrder
    enforceSingleAccountPerDeviceIp?: SortOrder
    blockMobilePhoneLogin?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoginSecurityConfigMinOrderByAggregateInput = {
    id?: SortOrder
    enforceSingleDevicePerAccount?: SortOrder
    enforceSingleAccountPerDeviceIp?: SortOrder
    blockMobilePhoneLogin?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoginSecurityConfigSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type LoginAccessLogCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput> | LoginAccessLogCreateWithoutUserInput[] | LoginAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAccessLogCreateOrConnectWithoutUserInput | LoginAccessLogCreateOrConnectWithoutUserInput[]
    createMany?: LoginAccessLogCreateManyUserInputEnvelope
    connect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type LoginAccessLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput> | LoginAccessLogCreateWithoutUserInput[] | LoginAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAccessLogCreateOrConnectWithoutUserInput | LoginAccessLogCreateOrConnectWithoutUserInput[]
    createMany?: LoginAccessLogCreateManyUserInputEnvelope
    connect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWorkModeFieldUpdateOperationsInput = {
    set?: $Enums.WorkMode
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type LoginAccessLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput> | LoginAccessLogCreateWithoutUserInput[] | LoginAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAccessLogCreateOrConnectWithoutUserInput | LoginAccessLogCreateOrConnectWithoutUserInput[]
    upsert?: LoginAccessLogUpsertWithWhereUniqueWithoutUserInput | LoginAccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginAccessLogCreateManyUserInputEnvelope
    set?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    disconnect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    delete?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    connect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    update?: LoginAccessLogUpdateWithWhereUniqueWithoutUserInput | LoginAccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginAccessLogUpdateManyWithWhereWithoutUserInput | LoginAccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginAccessLogScalarWhereInput | LoginAccessLogScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type LoginAccessLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput> | LoginAccessLogCreateWithoutUserInput[] | LoginAccessLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoginAccessLogCreateOrConnectWithoutUserInput | LoginAccessLogCreateOrConnectWithoutUserInput[]
    upsert?: LoginAccessLogUpsertWithWhereUniqueWithoutUserInput | LoginAccessLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoginAccessLogCreateManyUserInputEnvelope
    set?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    disconnect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    delete?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    connect?: LoginAccessLogWhereUniqueInput | LoginAccessLogWhereUniqueInput[]
    update?: LoginAccessLogUpdateWithWhereUniqueWithoutUserInput | LoginAccessLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoginAccessLogUpdateManyWithWhereWithoutUserInput | LoginAccessLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoginAccessLogScalarWhereInput | LoginAccessLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuthSessionsInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthSessionsNestedInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    upsert?: UserUpsertWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthSessionsInput, UserUpdateWithoutAuthSessionsInput>, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserCreateNestedOneWithoutLoginAccessLogsInput = {
    create?: XOR<UserCreateWithoutLoginAccessLogsInput, UserUncheckedCreateWithoutLoginAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginAccessLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLoginAccessLogsNestedInput = {
    create?: XOR<UserCreateWithoutLoginAccessLogsInput, UserUncheckedCreateWithoutLoginAccessLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoginAccessLogsInput
    upsert?: UserUpsertWithoutLoginAccessLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoginAccessLogsInput, UserUpdateWithoutLoginAccessLogsInput>, UserUncheckedUpdateWithoutLoginAccessLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumWorkModeFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[]
    notIn?: $Enums.WorkMode[]
    not?: NestedEnumWorkModeFilter<$PrismaModel> | $Enums.WorkMode
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWorkModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkMode | EnumWorkModeFieldRefInput<$PrismaModel>
    in?: $Enums.WorkMode[]
    notIn?: $Enums.WorkMode[]
    not?: NestedEnumWorkModeWithAggregatesFilter<$PrismaModel> | $Enums.WorkMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWorkModeFilter<$PrismaModel>
    _max?: NestedEnumWorkModeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AuthSessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
  }

  export type LoginAccessLogCreateWithoutUserInput = {
    id?: string
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
  }

  export type LoginAccessLogUncheckedCreateWithoutUserInput = {
    id?: string
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
  }

  export type LoginAccessLogCreateOrConnectWithoutUserInput = {
    where: LoginAccessLogWhereUniqueInput
    create: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput>
  }

  export type LoginAccessLogCreateManyUserInputEnvelope = {
    data: LoginAccessLogCreateManyUserInput | LoginAccessLogCreateManyUserInput[]
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    tokenHash?: StringFilter<"AuthSession"> | string
    ipAddress?: StringFilter<"AuthSession"> | string
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    deviceKey?: StringFilter<"AuthSession"> | string
    isSharedIp?: BoolFilter<"AuthSession"> | boolean
    isSharedDevice?: BoolFilter<"AuthSession"> | boolean
    appInstance?: StringNullableFilter<"AuthSession"> | string | null
    revokedAt?: DateTimeNullableFilter<"AuthSession"> | Date | string | null
    revokedReason?: StringNullableFilter<"AuthSession"> | string | null
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    lastSeenAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
  }

  export type LoginAccessLogUpsertWithWhereUniqueWithoutUserInput = {
    where: LoginAccessLogWhereUniqueInput
    update: XOR<LoginAccessLogUpdateWithoutUserInput, LoginAccessLogUncheckedUpdateWithoutUserInput>
    create: XOR<LoginAccessLogCreateWithoutUserInput, LoginAccessLogUncheckedCreateWithoutUserInput>
  }

  export type LoginAccessLogUpdateWithWhereUniqueWithoutUserInput = {
    where: LoginAccessLogWhereUniqueInput
    data: XOR<LoginAccessLogUpdateWithoutUserInput, LoginAccessLogUncheckedUpdateWithoutUserInput>
  }

  export type LoginAccessLogUpdateManyWithWhereWithoutUserInput = {
    where: LoginAccessLogScalarWhereInput
    data: XOR<LoginAccessLogUpdateManyMutationInput, LoginAccessLogUncheckedUpdateManyWithoutUserInput>
  }

  export type LoginAccessLogScalarWhereInput = {
    AND?: LoginAccessLogScalarWhereInput | LoginAccessLogScalarWhereInput[]
    OR?: LoginAccessLogScalarWhereInput[]
    NOT?: LoginAccessLogScalarWhereInput | LoginAccessLogScalarWhereInput[]
    id?: StringFilter<"LoginAccessLog"> | string
    userId?: StringNullableFilter<"LoginAccessLog"> | string | null
    usernameInput?: StringFilter<"LoginAccessLog"> | string
    ipAddress?: StringFilter<"LoginAccessLog"> | string
    userAgent?: StringNullableFilter<"LoginAccessLog"> | string | null
    deviceKey?: StringFilter<"LoginAccessLog"> | string
    success?: BoolFilter<"LoginAccessLog"> | boolean
    blockedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    failedReason?: StringNullableFilter<"LoginAccessLog"> | string | null
    isSharedIp?: BoolFilter<"LoginAccessLog"> | boolean
    isSharedDevice?: BoolFilter<"LoginAccessLog"> | boolean
    appInstance?: StringNullableFilter<"LoginAccessLog"> | string | null
    createdAt?: DateTimeFilter<"LoginAccessLog"> | Date | string
  }

  export type UserCreateWithoutAuthSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    loginAccessLogs?: LoginAccessLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthSessionsInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    loginAccessLogs?: LoginAccessLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
  }

  export type UserUpsertWithoutAuthSessionsInput = {
    update: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAccessLogs?: LoginAccessLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    loginAccessLogs?: LoginAccessLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLoginAccessLogsInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLoginAccessLogsInput = {
    id?: string
    username: string
    passwordHash: string
    fullName: string
    email?: string | null
    phone?: string | null
    address?: string | null
    department?: string | null
    workStartTime?: string | null
    workEndTime?: string | null
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson?: string
    workMode?: $Enums.WorkMode
    allowedOffDaysPerMonth?: number
    annualLeaveQuota?: number
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLoginAccessLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoginAccessLogsInput, UserUncheckedCreateWithoutLoginAccessLogsInput>
  }

  export type UserUpsertWithoutLoginAccessLogsInput = {
    update: XOR<UserUpdateWithoutLoginAccessLogsInput, UserUncheckedUpdateWithoutLoginAccessLogsInput>
    create: XOR<UserCreateWithoutLoginAccessLogsInput, UserUncheckedCreateWithoutLoginAccessLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoginAccessLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoginAccessLogsInput, UserUncheckedUpdateWithoutLoginAccessLogsInput>
  }

  export type UserUpdateWithoutLoginAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLoginAccessLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    workStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    workEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    workMode?: EnumWorkModeFieldUpdateOperationsInput | $Enums.WorkMode
    allowedOffDaysPerMonth?: IntFieldUpdateOperationsInput | number
    annualLeaveQuota?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthSessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    revokedAt?: Date | string | null
    revokedReason?: string | null
    expiresAt: Date | string
    lastSeenAt?: Date | string
    createdAt?: Date | string
  }

  export type LoginAccessLogCreateManyUserInput = {
    id?: string
    usernameInput: string
    ipAddress: string
    userAgent?: string | null
    deviceKey: string
    success: boolean
    blockedReason?: string | null
    failedReason?: string | null
    isSharedIp?: boolean
    isSharedDevice?: boolean
    appInstance?: string | null
    createdAt?: Date | string
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedReason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoginAccessLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usernameInput?: StringFieldUpdateOperationsInput | string
    ipAddress?: StringFieldUpdateOperationsInput | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    deviceKey?: StringFieldUpdateOperationsInput | string
    success?: BoolFieldUpdateOperationsInput | boolean
    blockedReason?: NullableStringFieldUpdateOperationsInput | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    isSharedIp?: BoolFieldUpdateOperationsInput | boolean
    isSharedDevice?: BoolFieldUpdateOperationsInput | boolean
    appInstance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}