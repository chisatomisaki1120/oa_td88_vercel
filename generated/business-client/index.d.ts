
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
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model EmployeeShiftAssignment
 * 
 */
export type EmployeeShiftAssignment = $Result.DefaultSelection<Prisma.$EmployeeShiftAssignmentPayload>
/**
 * Model AttendanceDay
 * 
 */
export type AttendanceDay = $Result.DefaultSelection<Prisma.$AttendanceDayPayload>
/**
 * Model BreakSession
 * 
 */
export type BreakSession = $Result.DefaultSelection<Prisma.$BreakSessionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model LeaveRequest
 * 
 */
export type LeaveRequest = $Result.DefaultSelection<Prisma.$LeaveRequestPayload>
/**
 * Model OutboxEvent
 * 
 */
export type OutboxEvent = $Result.DefaultSelection<Prisma.$OutboxEventPayload>
/**
 * Model SyncState
 * 
 */
export type SyncState = $Result.DefaultSelection<Prisma.$SyncStatePayload>
/**
 * Model ReconciliationLog
 * 
 */
export type ReconciliationLog = $Result.DefaultSelection<Prisma.$ReconciliationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  PRESENT: 'PRESENT',
  LATE: 'LATE',
  EARLY_LEAVE: 'EARLY_LEAVE',
  ABSENT: 'ABSENT',
  INCOMPLETE: 'INCOMPLETE',
  OFF: 'OFF'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const BreakType: {
  WC: 'WC',
  SMOKE: 'SMOKE',
  MEAL: 'MEAL',
  OTHER: 'OTHER'
};

export type BreakType = (typeof BreakType)[keyof typeof BreakType]


export const LeaveRequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LeaveRequestStatus = (typeof LeaveRequestStatus)[keyof typeof LeaveRequestStatus]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type BreakType = $Enums.BreakType

export const BreakType: typeof $Enums.BreakType

export type LeaveRequestStatus = $Enums.LeaveRequestStatus

export const LeaveRequestStatus: typeof $Enums.LeaveRequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Shifts
 * const shifts = await prisma.shift.findMany()
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
   * // Fetch zero or more Shifts
   * const shifts = await prisma.shift.findMany()
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
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeShiftAssignment`: Exposes CRUD operations for the **EmployeeShiftAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeShiftAssignments
    * const employeeShiftAssignments = await prisma.employeeShiftAssignment.findMany()
    * ```
    */
  get employeeShiftAssignment(): Prisma.EmployeeShiftAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendanceDay`: Exposes CRUD operations for the **AttendanceDay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceDays
    * const attendanceDays = await prisma.attendanceDay.findMany()
    * ```
    */
  get attendanceDay(): Prisma.AttendanceDayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.breakSession`: Exposes CRUD operations for the **BreakSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BreakSessions
    * const breakSessions = await prisma.breakSession.findMany()
    * ```
    */
  get breakSession(): Prisma.BreakSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveRequest`: Exposes CRUD operations for the **LeaveRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveRequests
    * const leaveRequests = await prisma.leaveRequest.findMany()
    * ```
    */
  get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outboxEvent`: Exposes CRUD operations for the **OutboxEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutboxEvents
    * const outboxEvents = await prisma.outboxEvent.findMany()
    * ```
    */
  get outboxEvent(): Prisma.OutboxEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncState`: Exposes CRUD operations for the **SyncState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncStates
    * const syncStates = await prisma.syncState.findMany()
    * ```
    */
  get syncState(): Prisma.SyncStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reconciliationLog`: Exposes CRUD operations for the **ReconciliationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReconciliationLogs
    * const reconciliationLogs = await prisma.reconciliationLog.findMany()
    * ```
    */
  get reconciliationLog(): Prisma.ReconciliationLogDelegate<ExtArgs, ClientOptions>;
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
    Shift: 'Shift',
    EmployeeShiftAssignment: 'EmployeeShiftAssignment',
    AttendanceDay: 'AttendanceDay',
    BreakSession: 'BreakSession',
    AuditLog: 'AuditLog',
    LeaveRequest: 'LeaveRequest',
    OutboxEvent: 'OutboxEvent',
    SyncState: 'SyncState',
    ReconciliationLog: 'ReconciliationLog'
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
      modelProps: "shift" | "employeeShiftAssignment" | "attendanceDay" | "breakSession" | "auditLog" | "leaveRequest" | "outboxEvent" | "syncState" | "reconciliationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          createMany: {
            args: Prisma.ShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      EmployeeShiftAssignment: {
        payload: Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>
        fields: Prisma.EmployeeShiftAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeShiftAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          findFirst: {
            args: Prisma.EmployeeShiftAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeShiftAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          findMany: {
            args: Prisma.EmployeeShiftAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>[]
          }
          create: {
            args: Prisma.EmployeeShiftAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          createMany: {
            args: Prisma.EmployeeShiftAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeShiftAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>[]
          }
          delete: {
            args: Prisma.EmployeeShiftAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          update: {
            args: Prisma.EmployeeShiftAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeShiftAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeShiftAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.EmployeeShiftAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeShiftAssignmentPayload>
          }
          aggregate: {
            args: Prisma.EmployeeShiftAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeShiftAssignment>
          }
          groupBy: {
            args: Prisma.EmployeeShiftAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeShiftAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeShiftAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeShiftAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AttendanceDay: {
        payload: Prisma.$AttendanceDayPayload<ExtArgs>
        fields: Prisma.AttendanceDayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceDayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceDayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          findFirst: {
            args: Prisma.AttendanceDayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceDayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          findMany: {
            args: Prisma.AttendanceDayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>[]
          }
          create: {
            args: Prisma.AttendanceDayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          createMany: {
            args: Prisma.AttendanceDayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceDayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>[]
          }
          delete: {
            args: Prisma.AttendanceDayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          update: {
            args: Prisma.AttendanceDayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceDayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceDayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>[]
          }
          upsert: {
            args: Prisma.AttendanceDayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceDayPayload>
          }
          aggregate: {
            args: Prisma.AttendanceDayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceDay>
          }
          groupBy: {
            args: Prisma.AttendanceDayGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceDayGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceDayCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceDayCountAggregateOutputType> | number
          }
        }
      }
      BreakSession: {
        payload: Prisma.$BreakSessionPayload<ExtArgs>
        fields: Prisma.BreakSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BreakSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BreakSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          findFirst: {
            args: Prisma.BreakSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BreakSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          findMany: {
            args: Prisma.BreakSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>[]
          }
          create: {
            args: Prisma.BreakSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          createMany: {
            args: Prisma.BreakSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BreakSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>[]
          }
          delete: {
            args: Prisma.BreakSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          update: {
            args: Prisma.BreakSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          deleteMany: {
            args: Prisma.BreakSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BreakSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BreakSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>[]
          }
          upsert: {
            args: Prisma.BreakSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BreakSessionPayload>
          }
          aggregate: {
            args: Prisma.BreakSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBreakSession>
          }
          groupBy: {
            args: Prisma.BreakSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BreakSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BreakSessionCountArgs<ExtArgs>
            result: $Utils.Optional<BreakSessionCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      LeaveRequest: {
        payload: Prisma.$LeaveRequestPayload<ExtArgs>
        fields: Prisma.LeaveRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findFirst: {
            args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findMany: {
            args: Prisma.LeaveRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          create: {
            args: Prisma.LeaveRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          createMany: {
            args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          delete: {
            args: Prisma.LeaveRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          update: {
            args: Prisma.LeaveRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          deleteMany: {
            args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          upsert: {
            args: Prisma.LeaveRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          aggregate: {
            args: Prisma.LeaveRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveRequest>
          }
          groupBy: {
            args: Prisma.LeaveRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestCountAggregateOutputType> | number
          }
        }
      }
      OutboxEvent: {
        payload: Prisma.$OutboxEventPayload<ExtArgs>
        fields: Prisma.OutboxEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutboxEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutboxEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findFirst: {
            args: Prisma.OutboxEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutboxEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          findMany: {
            args: Prisma.OutboxEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          create: {
            args: Prisma.OutboxEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          createMany: {
            args: Prisma.OutboxEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OutboxEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          delete: {
            args: Prisma.OutboxEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          update: {
            args: Prisma.OutboxEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          deleteMany: {
            args: Prisma.OutboxEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutboxEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OutboxEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>[]
          }
          upsert: {
            args: Prisma.OutboxEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutboxEventPayload>
          }
          aggregate: {
            args: Prisma.OutboxEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutboxEvent>
          }
          groupBy: {
            args: Prisma.OutboxEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutboxEventCountArgs<ExtArgs>
            result: $Utils.Optional<OutboxEventCountAggregateOutputType> | number
          }
        }
      }
      SyncState: {
        payload: Prisma.$SyncStatePayload<ExtArgs>
        fields: Prisma.SyncStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findFirst: {
            args: Prisma.SyncStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          findMany: {
            args: Prisma.SyncStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          create: {
            args: Prisma.SyncStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          createMany: {
            args: Prisma.SyncStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          delete: {
            args: Prisma.SyncStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          update: {
            args: Prisma.SyncStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          deleteMany: {
            args: Prisma.SyncStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>[]
          }
          upsert: {
            args: Prisma.SyncStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncStatePayload>
          }
          aggregate: {
            args: Prisma.SyncStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncState>
          }
          groupBy: {
            args: Prisma.SyncStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncStateCountArgs<ExtArgs>
            result: $Utils.Optional<SyncStateCountAggregateOutputType> | number
          }
        }
      }
      ReconciliationLog: {
        payload: Prisma.$ReconciliationLogPayload<ExtArgs>
        fields: Prisma.ReconciliationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReconciliationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReconciliationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          findFirst: {
            args: Prisma.ReconciliationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReconciliationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          findMany: {
            args: Prisma.ReconciliationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>[]
          }
          create: {
            args: Prisma.ReconciliationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          createMany: {
            args: Prisma.ReconciliationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReconciliationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>[]
          }
          delete: {
            args: Prisma.ReconciliationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          update: {
            args: Prisma.ReconciliationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          deleteMany: {
            args: Prisma.ReconciliationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReconciliationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReconciliationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>[]
          }
          upsert: {
            args: Prisma.ReconciliationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReconciliationLogPayload>
          }
          aggregate: {
            args: Prisma.ReconciliationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReconciliationLog>
          }
          groupBy: {
            args: Prisma.ReconciliationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReconciliationLogCountArgs<ExtArgs>
            result: $Utils.Optional<ReconciliationLogCountAggregateOutputType> | number
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
    shift?: ShiftOmit
    employeeShiftAssignment?: EmployeeShiftAssignmentOmit
    attendanceDay?: AttendanceDayOmit
    breakSession?: BreakSessionOmit
    auditLog?: AuditLogOmit
    leaveRequest?: LeaveRequestOmit
    outboxEvent?: OutboxEventOmit
    syncState?: SyncStateOmit
    reconciliationLog?: ReconciliationLogOmit
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
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    assignments: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ShiftCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeShiftAssignmentWhereInput
  }


  /**
   * Count Type AttendanceDayCountOutputType
   */

  export type AttendanceDayCountOutputType = {
    breakSessions: number
  }

  export type AttendanceDayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breakSessions?: boolean | AttendanceDayCountOutputTypeCountBreakSessionsArgs
  }

  // Custom InputTypes
  /**
   * AttendanceDayCountOutputType without action
   */
  export type AttendanceDayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDayCountOutputType
     */
    select?: AttendanceDayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendanceDayCountOutputType without action
   */
  export type AttendanceDayCountOutputTypeCountBreakSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftAvgAggregateOutputType = {
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
  }

  export type ShiftSumAggregateOutputType = {
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
  }

  export type ShiftMinAggregateOutputType = {
    id: string | null
    name: string | null
    startTime: string | null
    endTime: string | null
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    breakPolicyJson: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: string | null
    name: string | null
    startTime: string | null
    endTime: string | null
    lateGraceMinutes: number | null
    earlyLeaveGraceMinutes: number | null
    breakPolicyJson: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    name: number
    startTime: number
    endTime: number
    lateGraceMinutes: number
    earlyLeaveGraceMinutes: number
    breakPolicyJson: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftAvgAggregateInputType = {
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
  }

  export type ShiftSumAggregateInputType = {
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
  }

  export type ShiftMinAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    name?: true
    startTime?: true
    endTime?: true
    lateGraceMinutes?: true
    earlyLeaveGraceMinutes?: true
    breakPolicyJson?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _avg?: ShiftAvgAggregateInputType
    _sum?: ShiftSumAggregateInputType
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes: number
    earlyLeaveGraceMinutes: number
    breakPolicyJson: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _avg: ShiftAvgAggregateOutputType | null
    _sum: ShiftSumAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    name?: boolean
    startTime?: boolean
    endTime?: boolean
    lateGraceMinutes?: boolean
    earlyLeaveGraceMinutes?: boolean
    breakPolicyJson?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "startTime" | "endTime" | "lateGraceMinutes" | "earlyLeaveGraceMinutes" | "breakPolicyJson" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["shift"]>
  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Shift$assignmentsArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShiftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      assignments: Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      startTime: string
      endTime: string
      lateGraceMinutes: number
      earlyLeaveGraceMinutes: number
      breakPolicyJson: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }

  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShiftFindUniqueArgs>(args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShiftFindFirstArgs>(args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShiftFindManyArgs>(args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
     */
    create<T extends ShiftCreateArgs>(args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shifts.
     * @param {ShiftCreateManyArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShiftCreateManyArgs>(args?: SelectSubset<T, ShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shifts and returns the data saved in the database.
     * @param {ShiftCreateManyAndReturnArgs} args - Arguments to create many Shifts.
     * @example
     * // Create many Shifts
     * const shift = await prisma.shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, ShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
     */
    delete<T extends ShiftDeleteArgs>(args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShiftUpdateArgs>(args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShiftDeleteManyArgs>(args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShiftUpdateManyArgs>(args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts and returns the data updated in the database.
     * @param {ShiftUpdateManyAndReturnArgs} args - Arguments to update many Shifts.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shifts and only return the `id`
     * const shiftWithIdOnly = await prisma.shift.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShiftUpdateManyAndReturnArgs>(args: SelectSubset<T, ShiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
     */
    upsert<T extends ShiftUpsertArgs>(args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
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
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Shift$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Shift$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shift model
   */
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'String'>
    readonly name: FieldRef<"Shift", 'String'>
    readonly startTime: FieldRef<"Shift", 'String'>
    readonly endTime: FieldRef<"Shift", 'String'>
    readonly lateGraceMinutes: FieldRef<"Shift", 'Int'>
    readonly earlyLeaveGraceMinutes: FieldRef<"Shift", 'Int'>
    readonly breakPolicyJson: FieldRef<"Shift", 'String'>
    readonly isActive: FieldRef<"Shift", 'Boolean'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }

  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }

  /**
   * Shift createMany
   */
  export type ShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
  }

  /**
   * Shift createManyAndReturn
   */
  export type ShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to create many Shifts.
     */
    data: ShiftCreateManyInput | ShiftCreateManyInput[]
  }

  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift updateManyAndReturn
   */
  export type ShiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to update.
     */
    limit?: number
  }

  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }

  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }

  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
    /**
     * Limit how many Shifts to delete.
     */
    limit?: number
  }

  /**
   * Shift.assignments
   */
  export type Shift$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    where?: EmployeeShiftAssignmentWhereInput
    orderBy?: EmployeeShiftAssignmentOrderByWithRelationInput | EmployeeShiftAssignmentOrderByWithRelationInput[]
    cursor?: EmployeeShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeShiftAssignmentScalarFieldEnum | EmployeeShiftAssignmentScalarFieldEnum[]
  }

  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shift
     */
    omit?: ShiftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShiftInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeShiftAssignment
   */

  export type AggregateEmployeeShiftAssignment = {
    _count: EmployeeShiftAssignmentCountAggregateOutputType | null
    _min: EmployeeShiftAssignmentMinAggregateOutputType | null
    _max: EmployeeShiftAssignmentMaxAggregateOutputType | null
  }

  export type EmployeeShiftAssignmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    shiftId: string | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeShiftAssignmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    shiftId: string | null
    effectiveFrom: Date | null
    effectiveTo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeShiftAssignmentCountAggregateOutputType = {
    id: number
    userId: number
    shiftId: number
    effectiveFrom: number
    effectiveTo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeShiftAssignmentMinAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeShiftAssignmentMaxAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeShiftAssignmentCountAggregateInputType = {
    id?: true
    userId?: true
    shiftId?: true
    effectiveFrom?: true
    effectiveTo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeShiftAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeShiftAssignment to aggregate.
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShiftAssignments to fetch.
     */
    orderBy?: EmployeeShiftAssignmentOrderByWithRelationInput | EmployeeShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeShiftAssignments
    **/
    _count?: true | EmployeeShiftAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeShiftAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeShiftAssignmentMaxAggregateInputType
  }

  export type GetEmployeeShiftAssignmentAggregateType<T extends EmployeeShiftAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeShiftAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeShiftAssignment[P]>
      : GetScalarType<T[P], AggregateEmployeeShiftAssignment[P]>
  }




  export type EmployeeShiftAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeShiftAssignmentWhereInput
    orderBy?: EmployeeShiftAssignmentOrderByWithAggregationInput | EmployeeShiftAssignmentOrderByWithAggregationInput[]
    by: EmployeeShiftAssignmentScalarFieldEnum[] | EmployeeShiftAssignmentScalarFieldEnum
    having?: EmployeeShiftAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeShiftAssignmentCountAggregateInputType | true
    _min?: EmployeeShiftAssignmentMinAggregateInputType
    _max?: EmployeeShiftAssignmentMaxAggregateInputType
  }

  export type EmployeeShiftAssignmentGroupByOutputType = {
    id: string
    userId: string
    shiftId: string
    effectiveFrom: Date
    effectiveTo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeShiftAssignmentCountAggregateOutputType | null
    _min: EmployeeShiftAssignmentMinAggregateOutputType | null
    _max: EmployeeShiftAssignmentMaxAggregateOutputType | null
  }

  type GetEmployeeShiftAssignmentGroupByPayload<T extends EmployeeShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeShiftAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeShiftAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeShiftAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeShiftAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeShiftAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeShiftAssignment"]>

  export type EmployeeShiftAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeShiftAssignment"]>

  export type EmployeeShiftAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeShiftAssignment"]>

  export type EmployeeShiftAssignmentSelectScalar = {
    id?: boolean
    userId?: boolean
    shiftId?: boolean
    effectiveFrom?: boolean
    effectiveTo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeShiftAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "shiftId" | "effectiveFrom" | "effectiveTo" | "createdAt" | "updatedAt", ExtArgs["result"]["employeeShiftAssignment"]>
  export type EmployeeShiftAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }
  export type EmployeeShiftAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }
  export type EmployeeShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
  }

  export type $EmployeeShiftAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeShiftAssignment"
    objects: {
      shift: Prisma.$ShiftPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      shiftId: string
      effectiveFrom: Date
      effectiveTo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employeeShiftAssignment"]>
    composites: {}
  }

  type EmployeeShiftAssignmentGetPayload<S extends boolean | null | undefined | EmployeeShiftAssignmentDefaultArgs> = $Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload, S>

  type EmployeeShiftAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeShiftAssignmentCountAggregateInputType | true
    }

  export interface EmployeeShiftAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeShiftAssignment'], meta: { name: 'EmployeeShiftAssignment' } }
    /**
     * Find zero or one EmployeeShiftAssignment that matches the filter.
     * @param {EmployeeShiftAssignmentFindUniqueArgs} args - Arguments to find a EmployeeShiftAssignment
     * @example
     * // Get one EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeShiftAssignmentFindUniqueArgs>(args: SelectSubset<T, EmployeeShiftAssignmentFindUniqueArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeShiftAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeShiftAssignmentFindUniqueOrThrowArgs} args - Arguments to find a EmployeeShiftAssignment
     * @example
     * // Get one EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeShiftAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeShiftAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentFindFirstArgs} args - Arguments to find a EmployeeShiftAssignment
     * @example
     * // Get one EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeShiftAssignmentFindFirstArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentFindFirstArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeShiftAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentFindFirstOrThrowArgs} args - Arguments to find a EmployeeShiftAssignment
     * @example
     * // Get one EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeShiftAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeShiftAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeShiftAssignments
     * const employeeShiftAssignments = await prisma.employeeShiftAssignment.findMany()
     * 
     * // Get first 10 EmployeeShiftAssignments
     * const employeeShiftAssignments = await prisma.employeeShiftAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeShiftAssignmentWithIdOnly = await prisma.employeeShiftAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeShiftAssignmentFindManyArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeShiftAssignment.
     * @param {EmployeeShiftAssignmentCreateArgs} args - Arguments to create a EmployeeShiftAssignment.
     * @example
     * // Create one EmployeeShiftAssignment
     * const EmployeeShiftAssignment = await prisma.employeeShiftAssignment.create({
     *   data: {
     *     // ... data to create a EmployeeShiftAssignment
     *   }
     * })
     * 
     */
    create<T extends EmployeeShiftAssignmentCreateArgs>(args: SelectSubset<T, EmployeeShiftAssignmentCreateArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeShiftAssignments.
     * @param {EmployeeShiftAssignmentCreateManyArgs} args - Arguments to create many EmployeeShiftAssignments.
     * @example
     * // Create many EmployeeShiftAssignments
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeShiftAssignmentCreateManyArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmployeeShiftAssignments and returns the data saved in the database.
     * @param {EmployeeShiftAssignmentCreateManyAndReturnArgs} args - Arguments to create many EmployeeShiftAssignments.
     * @example
     * // Create many EmployeeShiftAssignments
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmployeeShiftAssignments and only return the `id`
     * const employeeShiftAssignmentWithIdOnly = await prisma.employeeShiftAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeShiftAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmployeeShiftAssignment.
     * @param {EmployeeShiftAssignmentDeleteArgs} args - Arguments to delete one EmployeeShiftAssignment.
     * @example
     * // Delete one EmployeeShiftAssignment
     * const EmployeeShiftAssignment = await prisma.employeeShiftAssignment.delete({
     *   where: {
     *     // ... filter to delete one EmployeeShiftAssignment
     *   }
     * })
     * 
     */
    delete<T extends EmployeeShiftAssignmentDeleteArgs>(args: SelectSubset<T, EmployeeShiftAssignmentDeleteArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeShiftAssignment.
     * @param {EmployeeShiftAssignmentUpdateArgs} args - Arguments to update one EmployeeShiftAssignment.
     * @example
     * // Update one EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeShiftAssignmentUpdateArgs>(args: SelectSubset<T, EmployeeShiftAssignmentUpdateArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeShiftAssignments.
     * @param {EmployeeShiftAssignmentDeleteManyArgs} args - Arguments to filter EmployeeShiftAssignments to delete.
     * @example
     * // Delete a few EmployeeShiftAssignments
     * const { count } = await prisma.employeeShiftAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeShiftAssignmentDeleteManyArgs>(args?: SelectSubset<T, EmployeeShiftAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeShiftAssignments
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeShiftAssignmentUpdateManyArgs>(args: SelectSubset<T, EmployeeShiftAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeShiftAssignments and returns the data updated in the database.
     * @param {EmployeeShiftAssignmentUpdateManyAndReturnArgs} args - Arguments to update many EmployeeShiftAssignments.
     * @example
     * // Update many EmployeeShiftAssignments
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmployeeShiftAssignments and only return the `id`
     * const employeeShiftAssignmentWithIdOnly = await prisma.employeeShiftAssignment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeShiftAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeShiftAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmployeeShiftAssignment.
     * @param {EmployeeShiftAssignmentUpsertArgs} args - Arguments to update or create a EmployeeShiftAssignment.
     * @example
     * // Update or create a EmployeeShiftAssignment
     * const employeeShiftAssignment = await prisma.employeeShiftAssignment.upsert({
     *   create: {
     *     // ... data to create a EmployeeShiftAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeShiftAssignment we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeShiftAssignmentUpsertArgs>(args: SelectSubset<T, EmployeeShiftAssignmentUpsertArgs<ExtArgs>>): Prisma__EmployeeShiftAssignmentClient<$Result.GetResult<Prisma.$EmployeeShiftAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentCountArgs} args - Arguments to filter EmployeeShiftAssignments to count.
     * @example
     * // Count the number of EmployeeShiftAssignments
     * const count = await prisma.employeeShiftAssignment.count({
     *   where: {
     *     // ... the filter for the EmployeeShiftAssignments we want to count
     *   }
     * })
    **/
    count<T extends EmployeeShiftAssignmentCountArgs>(
      args?: Subset<T, EmployeeShiftAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeShiftAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeShiftAssignmentAggregateArgs>(args: Subset<T, EmployeeShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetEmployeeShiftAssignmentAggregateType<T>>

    /**
     * Group by EmployeeShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeShiftAssignmentGroupByArgs} args - Group by arguments.
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
      T extends EmployeeShiftAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeShiftAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeShiftAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeShiftAssignment model
   */
  readonly fields: EmployeeShiftAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeShiftAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeShiftAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeShiftAssignment model
   */
  interface EmployeeShiftAssignmentFieldRefs {
    readonly id: FieldRef<"EmployeeShiftAssignment", 'String'>
    readonly userId: FieldRef<"EmployeeShiftAssignment", 'String'>
    readonly shiftId: FieldRef<"EmployeeShiftAssignment", 'String'>
    readonly effectiveFrom: FieldRef<"EmployeeShiftAssignment", 'DateTime'>
    readonly effectiveTo: FieldRef<"EmployeeShiftAssignment", 'DateTime'>
    readonly createdAt: FieldRef<"EmployeeShiftAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"EmployeeShiftAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeShiftAssignment findUnique
   */
  export type EmployeeShiftAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShiftAssignment to fetch.
     */
    where: EmployeeShiftAssignmentWhereUniqueInput
  }

  /**
   * EmployeeShiftAssignment findUniqueOrThrow
   */
  export type EmployeeShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShiftAssignment to fetch.
     */
    where: EmployeeShiftAssignmentWhereUniqueInput
  }

  /**
   * EmployeeShiftAssignment findFirst
   */
  export type EmployeeShiftAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShiftAssignment to fetch.
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShiftAssignments to fetch.
     */
    orderBy?: EmployeeShiftAssignmentOrderByWithRelationInput | EmployeeShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeShiftAssignments.
     */
    cursor?: EmployeeShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeShiftAssignments.
     */
    distinct?: EmployeeShiftAssignmentScalarFieldEnum | EmployeeShiftAssignmentScalarFieldEnum[]
  }

  /**
   * EmployeeShiftAssignment findFirstOrThrow
   */
  export type EmployeeShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShiftAssignment to fetch.
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShiftAssignments to fetch.
     */
    orderBy?: EmployeeShiftAssignmentOrderByWithRelationInput | EmployeeShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeShiftAssignments.
     */
    cursor?: EmployeeShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeShiftAssignments.
     */
    distinct?: EmployeeShiftAssignmentScalarFieldEnum | EmployeeShiftAssignmentScalarFieldEnum[]
  }

  /**
   * EmployeeShiftAssignment findMany
   */
  export type EmployeeShiftAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeShiftAssignments to fetch.
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeShiftAssignments to fetch.
     */
    orderBy?: EmployeeShiftAssignmentOrderByWithRelationInput | EmployeeShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeShiftAssignments.
     */
    cursor?: EmployeeShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeShiftAssignments.
     */
    distinct?: EmployeeShiftAssignmentScalarFieldEnum | EmployeeShiftAssignmentScalarFieldEnum[]
  }

  /**
   * EmployeeShiftAssignment create
   */
  export type EmployeeShiftAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeShiftAssignment.
     */
    data: XOR<EmployeeShiftAssignmentCreateInput, EmployeeShiftAssignmentUncheckedCreateInput>
  }

  /**
   * EmployeeShiftAssignment createMany
   */
  export type EmployeeShiftAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeShiftAssignments.
     */
    data: EmployeeShiftAssignmentCreateManyInput | EmployeeShiftAssignmentCreateManyInput[]
  }

  /**
   * EmployeeShiftAssignment createManyAndReturn
   */
  export type EmployeeShiftAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many EmployeeShiftAssignments.
     */
    data: EmployeeShiftAssignmentCreateManyInput | EmployeeShiftAssignmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeShiftAssignment update
   */
  export type EmployeeShiftAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeShiftAssignment.
     */
    data: XOR<EmployeeShiftAssignmentUpdateInput, EmployeeShiftAssignmentUncheckedUpdateInput>
    /**
     * Choose, which EmployeeShiftAssignment to update.
     */
    where: EmployeeShiftAssignmentWhereUniqueInput
  }

  /**
   * EmployeeShiftAssignment updateMany
   */
  export type EmployeeShiftAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeShiftAssignments.
     */
    data: XOR<EmployeeShiftAssignmentUpdateManyMutationInput, EmployeeShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeShiftAssignments to update
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * Limit how many EmployeeShiftAssignments to update.
     */
    limit?: number
  }

  /**
   * EmployeeShiftAssignment updateManyAndReturn
   */
  export type EmployeeShiftAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update EmployeeShiftAssignments.
     */
    data: XOR<EmployeeShiftAssignmentUpdateManyMutationInput, EmployeeShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeShiftAssignments to update
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * Limit how many EmployeeShiftAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmployeeShiftAssignment upsert
   */
  export type EmployeeShiftAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeShiftAssignment to update in case it exists.
     */
    where: EmployeeShiftAssignmentWhereUniqueInput
    /**
     * In case the EmployeeShiftAssignment found by the `where` argument doesn't exist, create a new EmployeeShiftAssignment with this data.
     */
    create: XOR<EmployeeShiftAssignmentCreateInput, EmployeeShiftAssignmentUncheckedCreateInput>
    /**
     * In case the EmployeeShiftAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeShiftAssignmentUpdateInput, EmployeeShiftAssignmentUncheckedUpdateInput>
  }

  /**
   * EmployeeShiftAssignment delete
   */
  export type EmployeeShiftAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter which EmployeeShiftAssignment to delete.
     */
    where: EmployeeShiftAssignmentWhereUniqueInput
  }

  /**
   * EmployeeShiftAssignment deleteMany
   */
  export type EmployeeShiftAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeShiftAssignments to delete
     */
    where?: EmployeeShiftAssignmentWhereInput
    /**
     * Limit how many EmployeeShiftAssignments to delete.
     */
    limit?: number
  }

  /**
   * EmployeeShiftAssignment without action
   */
  export type EmployeeShiftAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeShiftAssignment
     */
    select?: EmployeeShiftAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeShiftAssignment
     */
    omit?: EmployeeShiftAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeShiftAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceDay
   */

  export type AggregateAttendanceDay = {
    _count: AttendanceDayCountAggregateOutputType | null
    _avg: AttendanceDayAvgAggregateOutputType | null
    _sum: AttendanceDaySumAggregateOutputType | null
    _min: AttendanceDayMinAggregateOutputType | null
    _max: AttendanceDayMaxAggregateOutputType | null
  }

  export type AttendanceDayAvgAggregateOutputType = {
    workedMinutes: number | null
  }

  export type AttendanceDaySumAggregateOutputType = {
    workedMinutes: number | null
  }

  export type AttendanceDayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    workDate: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.AttendanceStatus | null
    warningFlagsJson: string | null
    workedMinutes: number | null
    isOffDay: boolean | null
    offReason: string | null
    isDeducted: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceDayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    workDate: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.AttendanceStatus | null
    warningFlagsJson: string | null
    workedMinutes: number | null
    isOffDay: boolean | null
    offReason: string | null
    isDeducted: boolean | null
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceDayCountAggregateOutputType = {
    id: number
    userId: number
    workDate: number
    checkInAt: number
    checkOutAt: number
    status: number
    warningFlagsJson: number
    workedMinutes: number
    isOffDay: number
    offReason: number
    isDeducted: number
    createdBy: number
    updatedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceDayAvgAggregateInputType = {
    workedMinutes?: true
  }

  export type AttendanceDaySumAggregateInputType = {
    workedMinutes?: true
  }

  export type AttendanceDayMinAggregateInputType = {
    id?: true
    userId?: true
    workDate?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
    warningFlagsJson?: true
    workedMinutes?: true
    isOffDay?: true
    offReason?: true
    isDeducted?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceDayMaxAggregateInputType = {
    id?: true
    userId?: true
    workDate?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
    warningFlagsJson?: true
    workedMinutes?: true
    isOffDay?: true
    offReason?: true
    isDeducted?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceDayCountAggregateInputType = {
    id?: true
    userId?: true
    workDate?: true
    checkInAt?: true
    checkOutAt?: true
    status?: true
    warningFlagsJson?: true
    workedMinutes?: true
    isOffDay?: true
    offReason?: true
    isDeducted?: true
    createdBy?: true
    updatedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceDayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceDay to aggregate.
     */
    where?: AttendanceDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDays to fetch.
     */
    orderBy?: AttendanceDayOrderByWithRelationInput | AttendanceDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceDays
    **/
    _count?: true | AttendanceDayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceDayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceDaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceDayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceDayMaxAggregateInputType
  }

  export type GetAttendanceDayAggregateType<T extends AttendanceDayAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceDay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceDay[P]>
      : GetScalarType<T[P], AggregateAttendanceDay[P]>
  }




  export type AttendanceDayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceDayWhereInput
    orderBy?: AttendanceDayOrderByWithAggregationInput | AttendanceDayOrderByWithAggregationInput[]
    by: AttendanceDayScalarFieldEnum[] | AttendanceDayScalarFieldEnum
    having?: AttendanceDayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceDayCountAggregateInputType | true
    _avg?: AttendanceDayAvgAggregateInputType
    _sum?: AttendanceDaySumAggregateInputType
    _min?: AttendanceDayMinAggregateInputType
    _max?: AttendanceDayMaxAggregateInputType
  }

  export type AttendanceDayGroupByOutputType = {
    id: string
    userId: string
    workDate: string
    checkInAt: Date | null
    checkOutAt: Date | null
    status: $Enums.AttendanceStatus
    warningFlagsJson: string
    workedMinutes: number | null
    isOffDay: boolean
    offReason: string | null
    isDeducted: boolean
    createdBy: string | null
    updatedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceDayCountAggregateOutputType | null
    _avg: AttendanceDayAvgAggregateOutputType | null
    _sum: AttendanceDaySumAggregateOutputType | null
    _min: AttendanceDayMinAggregateOutputType | null
    _max: AttendanceDayMaxAggregateOutputType | null
  }

  type GetAttendanceDayGroupByPayload<T extends AttendanceDayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceDayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceDayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceDayGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceDayGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceDaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDate?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    warningFlagsJson?: boolean
    workedMinutes?: boolean
    isOffDay?: boolean
    offReason?: boolean
    isDeducted?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    breakSessions?: boolean | AttendanceDay$breakSessionsArgs<ExtArgs>
    _count?: boolean | AttendanceDayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceDay"]>

  export type AttendanceDaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDate?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    warningFlagsJson?: boolean
    workedMinutes?: boolean
    isOffDay?: boolean
    offReason?: boolean
    isDeducted?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendanceDay"]>

  export type AttendanceDaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    workDate?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    warningFlagsJson?: boolean
    workedMinutes?: boolean
    isOffDay?: boolean
    offReason?: boolean
    isDeducted?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendanceDay"]>

  export type AttendanceDaySelectScalar = {
    id?: boolean
    userId?: boolean
    workDate?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    status?: boolean
    warningFlagsJson?: boolean
    workedMinutes?: boolean
    isOffDay?: boolean
    offReason?: boolean
    isDeducted?: boolean
    createdBy?: boolean
    updatedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceDayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "workDate" | "checkInAt" | "checkOutAt" | "status" | "warningFlagsJson" | "workedMinutes" | "isOffDay" | "offReason" | "isDeducted" | "createdBy" | "updatedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["attendanceDay"]>
  export type AttendanceDayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    breakSessions?: boolean | AttendanceDay$breakSessionsArgs<ExtArgs>
    _count?: boolean | AttendanceDayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendanceDayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AttendanceDayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AttendanceDayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceDay"
    objects: {
      breakSessions: Prisma.$BreakSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      workDate: string
      checkInAt: Date | null
      checkOutAt: Date | null
      status: $Enums.AttendanceStatus
      warningFlagsJson: string
      workedMinutes: number | null
      isOffDay: boolean
      offReason: string | null
      isDeducted: boolean
      createdBy: string | null
      updatedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendanceDay"]>
    composites: {}
  }

  type AttendanceDayGetPayload<S extends boolean | null | undefined | AttendanceDayDefaultArgs> = $Result.GetResult<Prisma.$AttendanceDayPayload, S>

  type AttendanceDayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceDayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceDayCountAggregateInputType | true
    }

  export interface AttendanceDayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceDay'], meta: { name: 'AttendanceDay' } }
    /**
     * Find zero or one AttendanceDay that matches the filter.
     * @param {AttendanceDayFindUniqueArgs} args - Arguments to find a AttendanceDay
     * @example
     * // Get one AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceDayFindUniqueArgs>(args: SelectSubset<T, AttendanceDayFindUniqueArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttendanceDay that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceDayFindUniqueOrThrowArgs} args - Arguments to find a AttendanceDay
     * @example
     * // Get one AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceDayFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceDayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceDay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayFindFirstArgs} args - Arguments to find a AttendanceDay
     * @example
     * // Get one AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceDayFindFirstArgs>(args?: SelectSubset<T, AttendanceDayFindFirstArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttendanceDay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayFindFirstOrThrowArgs} args - Arguments to find a AttendanceDay
     * @example
     * // Get one AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceDayFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceDayFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttendanceDays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceDays
     * const attendanceDays = await prisma.attendanceDay.findMany()
     * 
     * // Get first 10 AttendanceDays
     * const attendanceDays = await prisma.attendanceDay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceDayWithIdOnly = await prisma.attendanceDay.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceDayFindManyArgs>(args?: SelectSubset<T, AttendanceDayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttendanceDay.
     * @param {AttendanceDayCreateArgs} args - Arguments to create a AttendanceDay.
     * @example
     * // Create one AttendanceDay
     * const AttendanceDay = await prisma.attendanceDay.create({
     *   data: {
     *     // ... data to create a AttendanceDay
     *   }
     * })
     * 
     */
    create<T extends AttendanceDayCreateArgs>(args: SelectSubset<T, AttendanceDayCreateArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttendanceDays.
     * @param {AttendanceDayCreateManyArgs} args - Arguments to create many AttendanceDays.
     * @example
     * // Create many AttendanceDays
     * const attendanceDay = await prisma.attendanceDay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceDayCreateManyArgs>(args?: SelectSubset<T, AttendanceDayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceDays and returns the data saved in the database.
     * @param {AttendanceDayCreateManyAndReturnArgs} args - Arguments to create many AttendanceDays.
     * @example
     * // Create many AttendanceDays
     * const attendanceDay = await prisma.attendanceDay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceDays and only return the `id`
     * const attendanceDayWithIdOnly = await prisma.attendanceDay.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceDayCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceDayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttendanceDay.
     * @param {AttendanceDayDeleteArgs} args - Arguments to delete one AttendanceDay.
     * @example
     * // Delete one AttendanceDay
     * const AttendanceDay = await prisma.attendanceDay.delete({
     *   where: {
     *     // ... filter to delete one AttendanceDay
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDayDeleteArgs>(args: SelectSubset<T, AttendanceDayDeleteArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttendanceDay.
     * @param {AttendanceDayUpdateArgs} args - Arguments to update one AttendanceDay.
     * @example
     * // Update one AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceDayUpdateArgs>(args: SelectSubset<T, AttendanceDayUpdateArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttendanceDays.
     * @param {AttendanceDayDeleteManyArgs} args - Arguments to filter AttendanceDays to delete.
     * @example
     * // Delete a few AttendanceDays
     * const { count } = await prisma.attendanceDay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDayDeleteManyArgs>(args?: SelectSubset<T, AttendanceDayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceDays
     * const attendanceDay = await prisma.attendanceDay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceDayUpdateManyArgs>(args: SelectSubset<T, AttendanceDayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceDays and returns the data updated in the database.
     * @param {AttendanceDayUpdateManyAndReturnArgs} args - Arguments to update many AttendanceDays.
     * @example
     * // Update many AttendanceDays
     * const attendanceDay = await prisma.attendanceDay.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttendanceDays and only return the `id`
     * const attendanceDayWithIdOnly = await prisma.attendanceDay.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceDayUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceDayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttendanceDay.
     * @param {AttendanceDayUpsertArgs} args - Arguments to update or create a AttendanceDay.
     * @example
     * // Update or create a AttendanceDay
     * const attendanceDay = await prisma.attendanceDay.upsert({
     *   create: {
     *     // ... data to create a AttendanceDay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceDay we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceDayUpsertArgs>(args: SelectSubset<T, AttendanceDayUpsertArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttendanceDays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayCountArgs} args - Arguments to filter AttendanceDays to count.
     * @example
     * // Count the number of AttendanceDays
     * const count = await prisma.attendanceDay.count({
     *   where: {
     *     // ... the filter for the AttendanceDays we want to count
     *   }
     * })
    **/
    count<T extends AttendanceDayCountArgs>(
      args?: Subset<T, AttendanceDayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceDayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceDayAggregateArgs>(args: Subset<T, AttendanceDayAggregateArgs>): Prisma.PrismaPromise<GetAttendanceDayAggregateType<T>>

    /**
     * Group by AttendanceDay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceDayGroupByArgs} args - Group by arguments.
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
      T extends AttendanceDayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceDayGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceDayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceDayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceDayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceDay model
   */
  readonly fields: AttendanceDayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceDay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceDayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    breakSessions<T extends AttendanceDay$breakSessionsArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceDay$breakSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AttendanceDay model
   */
  interface AttendanceDayFieldRefs {
    readonly id: FieldRef<"AttendanceDay", 'String'>
    readonly userId: FieldRef<"AttendanceDay", 'String'>
    readonly workDate: FieldRef<"AttendanceDay", 'String'>
    readonly checkInAt: FieldRef<"AttendanceDay", 'DateTime'>
    readonly checkOutAt: FieldRef<"AttendanceDay", 'DateTime'>
    readonly status: FieldRef<"AttendanceDay", 'AttendanceStatus'>
    readonly warningFlagsJson: FieldRef<"AttendanceDay", 'String'>
    readonly workedMinutes: FieldRef<"AttendanceDay", 'Int'>
    readonly isOffDay: FieldRef<"AttendanceDay", 'Boolean'>
    readonly offReason: FieldRef<"AttendanceDay", 'String'>
    readonly isDeducted: FieldRef<"AttendanceDay", 'Boolean'>
    readonly createdBy: FieldRef<"AttendanceDay", 'String'>
    readonly updatedBy: FieldRef<"AttendanceDay", 'String'>
    readonly createdAt: FieldRef<"AttendanceDay", 'DateTime'>
    readonly updatedAt: FieldRef<"AttendanceDay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceDay findUnique
   */
  export type AttendanceDayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceDay to fetch.
     */
    where: AttendanceDayWhereUniqueInput
  }

  /**
   * AttendanceDay findUniqueOrThrow
   */
  export type AttendanceDayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceDay to fetch.
     */
    where: AttendanceDayWhereUniqueInput
  }

  /**
   * AttendanceDay findFirst
   */
  export type AttendanceDayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceDay to fetch.
     */
    where?: AttendanceDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDays to fetch.
     */
    orderBy?: AttendanceDayOrderByWithRelationInput | AttendanceDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceDays.
     */
    cursor?: AttendanceDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceDays.
     */
    distinct?: AttendanceDayScalarFieldEnum | AttendanceDayScalarFieldEnum[]
  }

  /**
   * AttendanceDay findFirstOrThrow
   */
  export type AttendanceDayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceDay to fetch.
     */
    where?: AttendanceDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDays to fetch.
     */
    orderBy?: AttendanceDayOrderByWithRelationInput | AttendanceDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceDays.
     */
    cursor?: AttendanceDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceDays.
     */
    distinct?: AttendanceDayScalarFieldEnum | AttendanceDayScalarFieldEnum[]
  }

  /**
   * AttendanceDay findMany
   */
  export type AttendanceDayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceDays to fetch.
     */
    where?: AttendanceDayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceDays to fetch.
     */
    orderBy?: AttendanceDayOrderByWithRelationInput | AttendanceDayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceDays.
     */
    cursor?: AttendanceDayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceDays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceDays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceDays.
     */
    distinct?: AttendanceDayScalarFieldEnum | AttendanceDayScalarFieldEnum[]
  }

  /**
   * AttendanceDay create
   */
  export type AttendanceDayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceDay.
     */
    data: XOR<AttendanceDayCreateInput, AttendanceDayUncheckedCreateInput>
  }

  /**
   * AttendanceDay createMany
   */
  export type AttendanceDayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceDays.
     */
    data: AttendanceDayCreateManyInput | AttendanceDayCreateManyInput[]
  }

  /**
   * AttendanceDay createManyAndReturn
   */
  export type AttendanceDayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * The data used to create many AttendanceDays.
     */
    data: AttendanceDayCreateManyInput | AttendanceDayCreateManyInput[]
  }

  /**
   * AttendanceDay update
   */
  export type AttendanceDayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceDay.
     */
    data: XOR<AttendanceDayUpdateInput, AttendanceDayUncheckedUpdateInput>
    /**
     * Choose, which AttendanceDay to update.
     */
    where: AttendanceDayWhereUniqueInput
  }

  /**
   * AttendanceDay updateMany
   */
  export type AttendanceDayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceDays.
     */
    data: XOR<AttendanceDayUpdateManyMutationInput, AttendanceDayUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceDays to update
     */
    where?: AttendanceDayWhereInput
    /**
     * Limit how many AttendanceDays to update.
     */
    limit?: number
  }

  /**
   * AttendanceDay updateManyAndReturn
   */
  export type AttendanceDayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * The data used to update AttendanceDays.
     */
    data: XOR<AttendanceDayUpdateManyMutationInput, AttendanceDayUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceDays to update
     */
    where?: AttendanceDayWhereInput
    /**
     * Limit how many AttendanceDays to update.
     */
    limit?: number
  }

  /**
   * AttendanceDay upsert
   */
  export type AttendanceDayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceDay to update in case it exists.
     */
    where: AttendanceDayWhereUniqueInput
    /**
     * In case the AttendanceDay found by the `where` argument doesn't exist, create a new AttendanceDay with this data.
     */
    create: XOR<AttendanceDayCreateInput, AttendanceDayUncheckedCreateInput>
    /**
     * In case the AttendanceDay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceDayUpdateInput, AttendanceDayUncheckedUpdateInput>
  }

  /**
   * AttendanceDay delete
   */
  export type AttendanceDayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
    /**
     * Filter which AttendanceDay to delete.
     */
    where: AttendanceDayWhereUniqueInput
  }

  /**
   * AttendanceDay deleteMany
   */
  export type AttendanceDayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceDays to delete
     */
    where?: AttendanceDayWhereInput
    /**
     * Limit how many AttendanceDays to delete.
     */
    limit?: number
  }

  /**
   * AttendanceDay.breakSessions
   */
  export type AttendanceDay$breakSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    where?: BreakSessionWhereInput
    orderBy?: BreakSessionOrderByWithRelationInput | BreakSessionOrderByWithRelationInput[]
    cursor?: BreakSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BreakSessionScalarFieldEnum | BreakSessionScalarFieldEnum[]
  }

  /**
   * AttendanceDay without action
   */
  export type AttendanceDayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceDay
     */
    select?: AttendanceDaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttendanceDay
     */
    omit?: AttendanceDayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceDayInclude<ExtArgs> | null
  }


  /**
   * Model BreakSession
   */

  export type AggregateBreakSession = {
    _count: BreakSessionCountAggregateOutputType | null
    _avg: BreakSessionAvgAggregateOutputType | null
    _sum: BreakSessionSumAggregateOutputType | null
    _min: BreakSessionMinAggregateOutputType | null
    _max: BreakSessionMaxAggregateOutputType | null
  }

  export type BreakSessionAvgAggregateOutputType = {
    durationMinutesComputed: number | null
  }

  export type BreakSessionSumAggregateOutputType = {
    durationMinutesComputed: number | null
  }

  export type BreakSessionMinAggregateOutputType = {
    id: string | null
    attendanceDayId: string | null
    breakType: $Enums.BreakType | null
    startAt: Date | null
    endAt: Date | null
    durationMinutesComputed: number | null
    createdAt: Date | null
  }

  export type BreakSessionMaxAggregateOutputType = {
    id: string | null
    attendanceDayId: string | null
    breakType: $Enums.BreakType | null
    startAt: Date | null
    endAt: Date | null
    durationMinutesComputed: number | null
    createdAt: Date | null
  }

  export type BreakSessionCountAggregateOutputType = {
    id: number
    attendanceDayId: number
    breakType: number
    startAt: number
    endAt: number
    durationMinutesComputed: number
    createdAt: number
    _all: number
  }


  export type BreakSessionAvgAggregateInputType = {
    durationMinutesComputed?: true
  }

  export type BreakSessionSumAggregateInputType = {
    durationMinutesComputed?: true
  }

  export type BreakSessionMinAggregateInputType = {
    id?: true
    attendanceDayId?: true
    breakType?: true
    startAt?: true
    endAt?: true
    durationMinutesComputed?: true
    createdAt?: true
  }

  export type BreakSessionMaxAggregateInputType = {
    id?: true
    attendanceDayId?: true
    breakType?: true
    startAt?: true
    endAt?: true
    durationMinutesComputed?: true
    createdAt?: true
  }

  export type BreakSessionCountAggregateInputType = {
    id?: true
    attendanceDayId?: true
    breakType?: true
    startAt?: true
    endAt?: true
    durationMinutesComputed?: true
    createdAt?: true
    _all?: true
  }

  export type BreakSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreakSession to aggregate.
     */
    where?: BreakSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreakSessions to fetch.
     */
    orderBy?: BreakSessionOrderByWithRelationInput | BreakSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BreakSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreakSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreakSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BreakSessions
    **/
    _count?: true | BreakSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BreakSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BreakSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BreakSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BreakSessionMaxAggregateInputType
  }

  export type GetBreakSessionAggregateType<T extends BreakSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateBreakSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBreakSession[P]>
      : GetScalarType<T[P], AggregateBreakSession[P]>
  }




  export type BreakSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BreakSessionWhereInput
    orderBy?: BreakSessionOrderByWithAggregationInput | BreakSessionOrderByWithAggregationInput[]
    by: BreakSessionScalarFieldEnum[] | BreakSessionScalarFieldEnum
    having?: BreakSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BreakSessionCountAggregateInputType | true
    _avg?: BreakSessionAvgAggregateInputType
    _sum?: BreakSessionSumAggregateInputType
    _min?: BreakSessionMinAggregateInputType
    _max?: BreakSessionMaxAggregateInputType
  }

  export type BreakSessionGroupByOutputType = {
    id: string
    attendanceDayId: string
    breakType: $Enums.BreakType
    startAt: Date
    endAt: Date | null
    durationMinutesComputed: number | null
    createdAt: Date
    _count: BreakSessionCountAggregateOutputType | null
    _avg: BreakSessionAvgAggregateOutputType | null
    _sum: BreakSessionSumAggregateOutputType | null
    _min: BreakSessionMinAggregateOutputType | null
    _max: BreakSessionMaxAggregateOutputType | null
  }

  type GetBreakSessionGroupByPayload<T extends BreakSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BreakSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BreakSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BreakSessionGroupByOutputType[P]>
            : GetScalarType<T[P], BreakSessionGroupByOutputType[P]>
        }
      >
    >


  export type BreakSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceDayId?: boolean
    breakType?: boolean
    startAt?: boolean
    endAt?: boolean
    durationMinutesComputed?: boolean
    createdAt?: boolean
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breakSession"]>

  export type BreakSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceDayId?: boolean
    breakType?: boolean
    startAt?: boolean
    endAt?: boolean
    durationMinutesComputed?: boolean
    createdAt?: boolean
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breakSession"]>

  export type BreakSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    attendanceDayId?: boolean
    breakType?: boolean
    startAt?: boolean
    endAt?: boolean
    durationMinutesComputed?: boolean
    createdAt?: boolean
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["breakSession"]>

  export type BreakSessionSelectScalar = {
    id?: boolean
    attendanceDayId?: boolean
    breakType?: boolean
    startAt?: boolean
    endAt?: boolean
    durationMinutesComputed?: boolean
    createdAt?: boolean
  }

  export type BreakSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "attendanceDayId" | "breakType" | "startAt" | "endAt" | "durationMinutesComputed" | "createdAt", ExtArgs["result"]["breakSession"]>
  export type BreakSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }
  export type BreakSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }
  export type BreakSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceDay?: boolean | AttendanceDayDefaultArgs<ExtArgs>
  }

  export type $BreakSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BreakSession"
    objects: {
      attendanceDay: Prisma.$AttendanceDayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      attendanceDayId: string
      breakType: $Enums.BreakType
      startAt: Date
      endAt: Date | null
      durationMinutesComputed: number | null
      createdAt: Date
    }, ExtArgs["result"]["breakSession"]>
    composites: {}
  }

  type BreakSessionGetPayload<S extends boolean | null | undefined | BreakSessionDefaultArgs> = $Result.GetResult<Prisma.$BreakSessionPayload, S>

  type BreakSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BreakSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BreakSessionCountAggregateInputType | true
    }

  export interface BreakSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BreakSession'], meta: { name: 'BreakSession' } }
    /**
     * Find zero or one BreakSession that matches the filter.
     * @param {BreakSessionFindUniqueArgs} args - Arguments to find a BreakSession
     * @example
     * // Get one BreakSession
     * const breakSession = await prisma.breakSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BreakSessionFindUniqueArgs>(args: SelectSubset<T, BreakSessionFindUniqueArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BreakSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BreakSessionFindUniqueOrThrowArgs} args - Arguments to find a BreakSession
     * @example
     * // Get one BreakSession
     * const breakSession = await prisma.breakSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BreakSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, BreakSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreakSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionFindFirstArgs} args - Arguments to find a BreakSession
     * @example
     * // Get one BreakSession
     * const breakSession = await prisma.breakSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BreakSessionFindFirstArgs>(args?: SelectSubset<T, BreakSessionFindFirstArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BreakSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionFindFirstOrThrowArgs} args - Arguments to find a BreakSession
     * @example
     * // Get one BreakSession
     * const breakSession = await prisma.breakSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BreakSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, BreakSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BreakSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BreakSessions
     * const breakSessions = await prisma.breakSession.findMany()
     * 
     * // Get first 10 BreakSessions
     * const breakSessions = await prisma.breakSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const breakSessionWithIdOnly = await prisma.breakSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BreakSessionFindManyArgs>(args?: SelectSubset<T, BreakSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BreakSession.
     * @param {BreakSessionCreateArgs} args - Arguments to create a BreakSession.
     * @example
     * // Create one BreakSession
     * const BreakSession = await prisma.breakSession.create({
     *   data: {
     *     // ... data to create a BreakSession
     *   }
     * })
     * 
     */
    create<T extends BreakSessionCreateArgs>(args: SelectSubset<T, BreakSessionCreateArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BreakSessions.
     * @param {BreakSessionCreateManyArgs} args - Arguments to create many BreakSessions.
     * @example
     * // Create many BreakSessions
     * const breakSession = await prisma.breakSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BreakSessionCreateManyArgs>(args?: SelectSubset<T, BreakSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BreakSessions and returns the data saved in the database.
     * @param {BreakSessionCreateManyAndReturnArgs} args - Arguments to create many BreakSessions.
     * @example
     * // Create many BreakSessions
     * const breakSession = await prisma.breakSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BreakSessions and only return the `id`
     * const breakSessionWithIdOnly = await prisma.breakSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BreakSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, BreakSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BreakSession.
     * @param {BreakSessionDeleteArgs} args - Arguments to delete one BreakSession.
     * @example
     * // Delete one BreakSession
     * const BreakSession = await prisma.breakSession.delete({
     *   where: {
     *     // ... filter to delete one BreakSession
     *   }
     * })
     * 
     */
    delete<T extends BreakSessionDeleteArgs>(args: SelectSubset<T, BreakSessionDeleteArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BreakSession.
     * @param {BreakSessionUpdateArgs} args - Arguments to update one BreakSession.
     * @example
     * // Update one BreakSession
     * const breakSession = await prisma.breakSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BreakSessionUpdateArgs>(args: SelectSubset<T, BreakSessionUpdateArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BreakSessions.
     * @param {BreakSessionDeleteManyArgs} args - Arguments to filter BreakSessions to delete.
     * @example
     * // Delete a few BreakSessions
     * const { count } = await prisma.breakSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BreakSessionDeleteManyArgs>(args?: SelectSubset<T, BreakSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreakSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BreakSessions
     * const breakSession = await prisma.breakSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BreakSessionUpdateManyArgs>(args: SelectSubset<T, BreakSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BreakSessions and returns the data updated in the database.
     * @param {BreakSessionUpdateManyAndReturnArgs} args - Arguments to update many BreakSessions.
     * @example
     * // Update many BreakSessions
     * const breakSession = await prisma.breakSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BreakSessions and only return the `id`
     * const breakSessionWithIdOnly = await prisma.breakSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends BreakSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, BreakSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BreakSession.
     * @param {BreakSessionUpsertArgs} args - Arguments to update or create a BreakSession.
     * @example
     * // Update or create a BreakSession
     * const breakSession = await prisma.breakSession.upsert({
     *   create: {
     *     // ... data to create a BreakSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BreakSession we want to update
     *   }
     * })
     */
    upsert<T extends BreakSessionUpsertArgs>(args: SelectSubset<T, BreakSessionUpsertArgs<ExtArgs>>): Prisma__BreakSessionClient<$Result.GetResult<Prisma.$BreakSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BreakSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionCountArgs} args - Arguments to filter BreakSessions to count.
     * @example
     * // Count the number of BreakSessions
     * const count = await prisma.breakSession.count({
     *   where: {
     *     // ... the filter for the BreakSessions we want to count
     *   }
     * })
    **/
    count<T extends BreakSessionCountArgs>(
      args?: Subset<T, BreakSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BreakSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BreakSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BreakSessionAggregateArgs>(args: Subset<T, BreakSessionAggregateArgs>): Prisma.PrismaPromise<GetBreakSessionAggregateType<T>>

    /**
     * Group by BreakSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BreakSessionGroupByArgs} args - Group by arguments.
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
      T extends BreakSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BreakSessionGroupByArgs['orderBy'] }
        : { orderBy?: BreakSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BreakSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBreakSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BreakSession model
   */
  readonly fields: BreakSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BreakSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BreakSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendanceDay<T extends AttendanceDayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceDayDefaultArgs<ExtArgs>>): Prisma__AttendanceDayClient<$Result.GetResult<Prisma.$AttendanceDayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BreakSession model
   */
  interface BreakSessionFieldRefs {
    readonly id: FieldRef<"BreakSession", 'String'>
    readonly attendanceDayId: FieldRef<"BreakSession", 'String'>
    readonly breakType: FieldRef<"BreakSession", 'BreakType'>
    readonly startAt: FieldRef<"BreakSession", 'DateTime'>
    readonly endAt: FieldRef<"BreakSession", 'DateTime'>
    readonly durationMinutesComputed: FieldRef<"BreakSession", 'Int'>
    readonly createdAt: FieldRef<"BreakSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BreakSession findUnique
   */
  export type BreakSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter, which BreakSession to fetch.
     */
    where: BreakSessionWhereUniqueInput
  }

  /**
   * BreakSession findUniqueOrThrow
   */
  export type BreakSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter, which BreakSession to fetch.
     */
    where: BreakSessionWhereUniqueInput
  }

  /**
   * BreakSession findFirst
   */
  export type BreakSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter, which BreakSession to fetch.
     */
    where?: BreakSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreakSessions to fetch.
     */
    orderBy?: BreakSessionOrderByWithRelationInput | BreakSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreakSessions.
     */
    cursor?: BreakSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreakSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreakSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreakSessions.
     */
    distinct?: BreakSessionScalarFieldEnum | BreakSessionScalarFieldEnum[]
  }

  /**
   * BreakSession findFirstOrThrow
   */
  export type BreakSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter, which BreakSession to fetch.
     */
    where?: BreakSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreakSessions to fetch.
     */
    orderBy?: BreakSessionOrderByWithRelationInput | BreakSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BreakSessions.
     */
    cursor?: BreakSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreakSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreakSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreakSessions.
     */
    distinct?: BreakSessionScalarFieldEnum | BreakSessionScalarFieldEnum[]
  }

  /**
   * BreakSession findMany
   */
  export type BreakSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter, which BreakSessions to fetch.
     */
    where?: BreakSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BreakSessions to fetch.
     */
    orderBy?: BreakSessionOrderByWithRelationInput | BreakSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BreakSessions.
     */
    cursor?: BreakSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BreakSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BreakSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BreakSessions.
     */
    distinct?: BreakSessionScalarFieldEnum | BreakSessionScalarFieldEnum[]
  }

  /**
   * BreakSession create
   */
  export type BreakSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a BreakSession.
     */
    data: XOR<BreakSessionCreateInput, BreakSessionUncheckedCreateInput>
  }

  /**
   * BreakSession createMany
   */
  export type BreakSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BreakSessions.
     */
    data: BreakSessionCreateManyInput | BreakSessionCreateManyInput[]
  }

  /**
   * BreakSession createManyAndReturn
   */
  export type BreakSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * The data used to create many BreakSessions.
     */
    data: BreakSessionCreateManyInput | BreakSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BreakSession update
   */
  export type BreakSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a BreakSession.
     */
    data: XOR<BreakSessionUpdateInput, BreakSessionUncheckedUpdateInput>
    /**
     * Choose, which BreakSession to update.
     */
    where: BreakSessionWhereUniqueInput
  }

  /**
   * BreakSession updateMany
   */
  export type BreakSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BreakSessions.
     */
    data: XOR<BreakSessionUpdateManyMutationInput, BreakSessionUncheckedUpdateManyInput>
    /**
     * Filter which BreakSessions to update
     */
    where?: BreakSessionWhereInput
    /**
     * Limit how many BreakSessions to update.
     */
    limit?: number
  }

  /**
   * BreakSession updateManyAndReturn
   */
  export type BreakSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * The data used to update BreakSessions.
     */
    data: XOR<BreakSessionUpdateManyMutationInput, BreakSessionUncheckedUpdateManyInput>
    /**
     * Filter which BreakSessions to update
     */
    where?: BreakSessionWhereInput
    /**
     * Limit how many BreakSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BreakSession upsert
   */
  export type BreakSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the BreakSession to update in case it exists.
     */
    where: BreakSessionWhereUniqueInput
    /**
     * In case the BreakSession found by the `where` argument doesn't exist, create a new BreakSession with this data.
     */
    create: XOR<BreakSessionCreateInput, BreakSessionUncheckedCreateInput>
    /**
     * In case the BreakSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BreakSessionUpdateInput, BreakSessionUncheckedUpdateInput>
  }

  /**
   * BreakSession delete
   */
  export type BreakSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
    /**
     * Filter which BreakSession to delete.
     */
    where: BreakSessionWhereUniqueInput
  }

  /**
   * BreakSession deleteMany
   */
  export type BreakSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BreakSessions to delete
     */
    where?: BreakSessionWhereInput
    /**
     * Limit how many BreakSessions to delete.
     */
    limit?: number
  }

  /**
   * BreakSession without action
   */
  export type BreakSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BreakSession
     */
    select?: BreakSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BreakSession
     */
    omit?: BreakSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BreakSessionInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorUserId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorUserId: number
    action: number
    entityType: number
    entityId: number
    beforeJson: number
    afterJson: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorUserId?: true
    action?: true
    entityType?: true
    entityId?: true
    beforeJson?: true
    afterJson?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorUserId: string | null
    action: string
    entityType: string
    entityId: string
    beforeJson: string | null
    afterJson: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorUserId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    beforeJson?: boolean
    afterJson?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorUserId" | "action" | "entityType" | "entityId" | "beforeJson" | "afterJson" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorUserId: string | null
      action: string
      entityType: string
      entityId: string
      beforeJson: string | null
      afterJson: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorUserId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly beforeJson: FieldRef<"AuditLog", 'String'>
    readonly afterJson: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model LeaveRequest
   */

  export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null
    _avg: LeaveRequestAvgAggregateOutputType | null
    _sum: LeaveRequestSumAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  export type LeaveRequestAvgAggregateOutputType = {
    year: number | null
  }

  export type LeaveRequestSumAggregateOutputType = {
    year: number | null
  }

  export type LeaveRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    year: number | null
    dates: string | null
    reason: string | null
    status: $Enums.LeaveRequestStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    rejectedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    year: number | null
    dates: string | null
    reason: string | null
    status: $Enums.LeaveRequestStatus | null
    reviewedBy: string | null
    reviewedAt: Date | null
    rejectedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeaveRequestCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    dates: number
    reason: number
    status: number
    reviewedBy: number
    reviewedAt: number
    rejectedReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeaveRequestAvgAggregateInputType = {
    year?: true
  }

  export type LeaveRequestSumAggregateInputType = {
    year?: true
  }

  export type LeaveRequestMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    dates?: true
    reason?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    dates?: true
    reason?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeaveRequestCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    dates?: true
    reason?: true
    status?: true
    reviewedBy?: true
    reviewedAt?: true
    rejectedReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeaveRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequest to aggregate.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveRequests
    **/
    _count?: true | LeaveRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveRequest[P]>
      : GetScalarType<T[P], AggregateLeaveRequest[P]>
  }




  export type LeaveRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithAggregationInput | LeaveRequestOrderByWithAggregationInput[]
    by: LeaveRequestScalarFieldEnum[] | LeaveRequestScalarFieldEnum
    having?: LeaveRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveRequestCountAggregateInputType | true
    _avg?: LeaveRequestAvgAggregateInputType
    _sum?: LeaveRequestSumAggregateInputType
    _min?: LeaveRequestMinAggregateInputType
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type LeaveRequestGroupByOutputType = {
    id: string
    userId: string
    year: number
    dates: string
    reason: string | null
    status: $Enums.LeaveRequestStatus
    reviewedBy: string | null
    reviewedAt: Date | null
    rejectedReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: LeaveRequestCountAggregateOutputType | null
    _avg: LeaveRequestAvgAggregateOutputType | null
    _sum: LeaveRequestSumAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
        }
      >
    >


  export type LeaveRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    dates?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    dates?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    dates?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    dates?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    reviewedAt?: boolean
    rejectedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LeaveRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "dates" | "reason" | "status" | "reviewedBy" | "reviewedAt" | "rejectedReason" | "createdAt" | "updatedAt", ExtArgs["result"]["leaveRequest"]>

  export type $LeaveRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      year: number
      dates: string
      reason: string | null
      status: $Enums.LeaveRequestStatus
      reviewedBy: string | null
      reviewedAt: Date | null
      rejectedReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["leaveRequest"]>
    composites: {}
  }

  type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = $Result.GetResult<Prisma.$LeaveRequestPayload, S>

  type LeaveRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveRequestCountAggregateInputType | true
    }

  export interface LeaveRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'], meta: { name: 'LeaveRequest' } }
    /**
     * Find zero or one LeaveRequest that matches the filter.
     * @param {LeaveRequestFindUniqueArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveRequestFindUniqueOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany()
     * 
     * // Get first 10 LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveRequestFindManyArgs>(args?: SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveRequest.
     * @param {LeaveRequestCreateArgs} args - Arguments to create a LeaveRequest.
     * @example
     * // Create one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.create({
     *   data: {
     *     // ... data to create a LeaveRequest
     *   }
     * })
     * 
     */
    create<T extends LeaveRequestCreateArgs>(args: SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveRequests.
     * @param {LeaveRequestCreateManyArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveRequestCreateManyArgs>(args?: SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveRequests and returns the data saved in the database.
     * @param {LeaveRequestCreateManyAndReturnArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveRequest.
     * @param {LeaveRequestDeleteArgs} args - Arguments to delete one LeaveRequest.
     * @example
     * // Delete one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.delete({
     *   where: {
     *     // ... filter to delete one LeaveRequest
     *   }
     * })
     * 
     */
    delete<T extends LeaveRequestDeleteArgs>(args: SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveRequest.
     * @param {LeaveRequestUpdateArgs} args - Arguments to update one LeaveRequest.
     * @example
     * // Update one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveRequestUpdateArgs>(args: SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveRequests.
     * @param {LeaveRequestDeleteManyArgs} args - Arguments to filter LeaveRequests to delete.
     * @example
     * // Delete a few LeaveRequests
     * const { count } = await prisma.leaveRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests and returns the data updated in the database.
     * @param {LeaveRequestUpdateManyAndReturnArgs} args - Arguments to update many LeaveRequests.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveRequest.
     * @param {LeaveRequestUpsertArgs} args - Arguments to update or create a LeaveRequest.
     * @example
     * // Update or create a LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.upsert({
     *   create: {
     *     // ... data to create a LeaveRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveRequest we want to update
     *   }
     * })
     */
    upsert<T extends LeaveRequestUpsertArgs>(args: SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestCountArgs} args - Arguments to filter LeaveRequests to count.
     * @example
     * // Count the number of LeaveRequests
     * const count = await prisma.leaveRequest.count({
     *   where: {
     *     // ... the filter for the LeaveRequests we want to count
     *   }
     * })
    **/
    count<T extends LeaveRequestCountArgs>(
      args?: Subset<T, LeaveRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveRequestAggregateArgs>(args: Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>

    /**
     * Group by LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestGroupByArgs} args - Group by arguments.
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
      T extends LeaveRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveRequestGroupByArgs['orderBy'] }
        : { orderBy?: LeaveRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveRequest model
   */
  readonly fields: LeaveRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LeaveRequest model
   */
  interface LeaveRequestFieldRefs {
    readonly id: FieldRef<"LeaveRequest", 'String'>
    readonly userId: FieldRef<"LeaveRequest", 'String'>
    readonly year: FieldRef<"LeaveRequest", 'Int'>
    readonly dates: FieldRef<"LeaveRequest", 'String'>
    readonly reason: FieldRef<"LeaveRequest", 'String'>
    readonly status: FieldRef<"LeaveRequest", 'LeaveRequestStatus'>
    readonly reviewedBy: FieldRef<"LeaveRequest", 'String'>
    readonly reviewedAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly rejectedReason: FieldRef<"LeaveRequest", 'String'>
    readonly createdAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaveRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveRequest findUnique
   */
  export type LeaveRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findUniqueOrThrow
   */
  export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findFirst
   */
  export type LeaveRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findFirstOrThrow
   */
  export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findMany
   */
  export type LeaveRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter, which LeaveRequests to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest create
   */
  export type LeaveRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a LeaveRequest.
     */
    data: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
  }

  /**
   * LeaveRequest createMany
   */
  export type LeaveRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
  }

  /**
   * LeaveRequest createManyAndReturn
   */
  export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
  }

  /**
   * LeaveRequest update
   */
  export type LeaveRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a LeaveRequest.
     */
    data: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
    /**
     * Choose, which LeaveRequest to update.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest updateMany
   */
  export type LeaveRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest updateManyAndReturn
   */
  export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest upsert
   */
  export type LeaveRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the LeaveRequest to update in case it exists.
     */
    where: LeaveRequestWhereUniqueInput
    /**
     * In case the LeaveRequest found by the `where` argument doesn't exist, create a new LeaveRequest with this data.
     */
    create: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
    /**
     * In case the LeaveRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
  }

  /**
   * LeaveRequest delete
   */
  export type LeaveRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Filter which LeaveRequest to delete.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest deleteMany
   */
  export type LeaveRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequests to delete
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to delete.
     */
    limit?: number
  }

  /**
   * LeaveRequest without action
   */
  export type LeaveRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
  }


  /**
   * Model OutboxEvent
   */

  export type AggregateOutboxEvent = {
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  export type OutboxEventAvgAggregateOutputType = {
    attemptCount: number | null
  }

  export type OutboxEventSumAggregateOutputType = {
    attemptCount: number | null
  }

  export type OutboxEventMinAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: string | null
    operation: string | null
    payloadJson: string | null
    occurredAt: Date | null
    sentAt: Date | null
    attemptCount: number | null
    lastError: string | null
  }

  export type OutboxEventMaxAggregateOutputType = {
    id: string | null
    aggregateType: string | null
    aggregateId: string | null
    operation: string | null
    payloadJson: string | null
    occurredAt: Date | null
    sentAt: Date | null
    attemptCount: number | null
    lastError: string | null
  }

  export type OutboxEventCountAggregateOutputType = {
    id: number
    aggregateType: number
    aggregateId: number
    operation: number
    payloadJson: number
    occurredAt: number
    sentAt: number
    attemptCount: number
    lastError: number
    _all: number
  }


  export type OutboxEventAvgAggregateInputType = {
    attemptCount?: true
  }

  export type OutboxEventSumAggregateInputType = {
    attemptCount?: true
  }

  export type OutboxEventMinAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    operation?: true
    payloadJson?: true
    occurredAt?: true
    sentAt?: true
    attemptCount?: true
    lastError?: true
  }

  export type OutboxEventMaxAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    operation?: true
    payloadJson?: true
    occurredAt?: true
    sentAt?: true
    attemptCount?: true
    lastError?: true
  }

  export type OutboxEventCountAggregateInputType = {
    id?: true
    aggregateType?: true
    aggregateId?: true
    operation?: true
    payloadJson?: true
    occurredAt?: true
    sentAt?: true
    attemptCount?: true
    lastError?: true
    _all?: true
  }

  export type OutboxEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvent to aggregate.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutboxEvents
    **/
    _count?: true | OutboxEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OutboxEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OutboxEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutboxEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutboxEventMaxAggregateInputType
  }

  export type GetOutboxEventAggregateType<T extends OutboxEventAggregateArgs> = {
        [P in keyof T & keyof AggregateOutboxEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutboxEvent[P]>
      : GetScalarType<T[P], AggregateOutboxEvent[P]>
  }




  export type OutboxEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutboxEventWhereInput
    orderBy?: OutboxEventOrderByWithAggregationInput | OutboxEventOrderByWithAggregationInput[]
    by: OutboxEventScalarFieldEnum[] | OutboxEventScalarFieldEnum
    having?: OutboxEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutboxEventCountAggregateInputType | true
    _avg?: OutboxEventAvgAggregateInputType
    _sum?: OutboxEventSumAggregateInputType
    _min?: OutboxEventMinAggregateInputType
    _max?: OutboxEventMaxAggregateInputType
  }

  export type OutboxEventGroupByOutputType = {
    id: string
    aggregateType: string
    aggregateId: string
    operation: string
    payloadJson: string
    occurredAt: Date
    sentAt: Date | null
    attemptCount: number
    lastError: string | null
    _count: OutboxEventCountAggregateOutputType | null
    _avg: OutboxEventAvgAggregateOutputType | null
    _sum: OutboxEventSumAggregateOutputType | null
    _min: OutboxEventMinAggregateOutputType | null
    _max: OutboxEventMaxAggregateOutputType | null
  }

  type GetOutboxEventGroupByPayload<T extends OutboxEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutboxEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutboxEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
            : GetScalarType<T[P], OutboxEventGroupByOutputType[P]>
        }
      >
    >


  export type OutboxEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    operation?: boolean
    payloadJson?: boolean
    occurredAt?: boolean
    sentAt?: boolean
    attemptCount?: boolean
    lastError?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    operation?: boolean
    payloadJson?: boolean
    occurredAt?: boolean
    sentAt?: boolean
    attemptCount?: boolean
    lastError?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    operation?: boolean
    payloadJson?: boolean
    occurredAt?: boolean
    sentAt?: boolean
    attemptCount?: boolean
    lastError?: boolean
  }, ExtArgs["result"]["outboxEvent"]>

  export type OutboxEventSelectScalar = {
    id?: boolean
    aggregateType?: boolean
    aggregateId?: boolean
    operation?: boolean
    payloadJson?: boolean
    occurredAt?: boolean
    sentAt?: boolean
    attemptCount?: boolean
    lastError?: boolean
  }

  export type OutboxEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aggregateType" | "aggregateId" | "operation" | "payloadJson" | "occurredAt" | "sentAt" | "attemptCount" | "lastError", ExtArgs["result"]["outboxEvent"]>

  export type $OutboxEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutboxEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      aggregateType: string
      aggregateId: string
      operation: string
      payloadJson: string
      occurredAt: Date
      sentAt: Date | null
      attemptCount: number
      lastError: string | null
    }, ExtArgs["result"]["outboxEvent"]>
    composites: {}
  }

  type OutboxEventGetPayload<S extends boolean | null | undefined | OutboxEventDefaultArgs> = $Result.GetResult<Prisma.$OutboxEventPayload, S>

  type OutboxEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutboxEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutboxEventCountAggregateInputType | true
    }

  export interface OutboxEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutboxEvent'], meta: { name: 'OutboxEvent' } }
    /**
     * Find zero or one OutboxEvent that matches the filter.
     * @param {OutboxEventFindUniqueArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutboxEventFindUniqueArgs>(args: SelectSubset<T, OutboxEventFindUniqueArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutboxEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutboxEventFindUniqueOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutboxEventFindUniqueOrThrowArgs>(args: SelectSubset<T, OutboxEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutboxEventFindFirstArgs>(args?: SelectSubset<T, OutboxEventFindFirstArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutboxEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindFirstOrThrowArgs} args - Arguments to find a OutboxEvent
     * @example
     * // Get one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutboxEventFindFirstOrThrowArgs>(args?: SelectSubset<T, OutboxEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutboxEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany()
     * 
     * // Get first 10 OutboxEvents
     * const outboxEvents = await prisma.outboxEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutboxEventFindManyArgs>(args?: SelectSubset<T, OutboxEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutboxEvent.
     * @param {OutboxEventCreateArgs} args - Arguments to create a OutboxEvent.
     * @example
     * // Create one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.create({
     *   data: {
     *     // ... data to create a OutboxEvent
     *   }
     * })
     * 
     */
    create<T extends OutboxEventCreateArgs>(args: SelectSubset<T, OutboxEventCreateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutboxEvents.
     * @param {OutboxEventCreateManyArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutboxEventCreateManyArgs>(args?: SelectSubset<T, OutboxEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OutboxEvents and returns the data saved in the database.
     * @param {OutboxEventCreateManyAndReturnArgs} args - Arguments to create many OutboxEvents.
     * @example
     * // Create many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OutboxEventCreateManyAndReturnArgs>(args?: SelectSubset<T, OutboxEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OutboxEvent.
     * @param {OutboxEventDeleteArgs} args - Arguments to delete one OutboxEvent.
     * @example
     * // Delete one OutboxEvent
     * const OutboxEvent = await prisma.outboxEvent.delete({
     *   where: {
     *     // ... filter to delete one OutboxEvent
     *   }
     * })
     * 
     */
    delete<T extends OutboxEventDeleteArgs>(args: SelectSubset<T, OutboxEventDeleteArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutboxEvent.
     * @param {OutboxEventUpdateArgs} args - Arguments to update one OutboxEvent.
     * @example
     * // Update one OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutboxEventUpdateArgs>(args: SelectSubset<T, OutboxEventUpdateArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutboxEvents.
     * @param {OutboxEventDeleteManyArgs} args - Arguments to filter OutboxEvents to delete.
     * @example
     * // Delete a few OutboxEvents
     * const { count } = await prisma.outboxEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutboxEventDeleteManyArgs>(args?: SelectSubset<T, OutboxEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutboxEventUpdateManyArgs>(args: SelectSubset<T, OutboxEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutboxEvents and returns the data updated in the database.
     * @param {OutboxEventUpdateManyAndReturnArgs} args - Arguments to update many OutboxEvents.
     * @example
     * // Update many OutboxEvents
     * const outboxEvent = await prisma.outboxEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OutboxEvents and only return the `id`
     * const outboxEventWithIdOnly = await prisma.outboxEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends OutboxEventUpdateManyAndReturnArgs>(args: SelectSubset<T, OutboxEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OutboxEvent.
     * @param {OutboxEventUpsertArgs} args - Arguments to update or create a OutboxEvent.
     * @example
     * // Update or create a OutboxEvent
     * const outboxEvent = await prisma.outboxEvent.upsert({
     *   create: {
     *     // ... data to create a OutboxEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutboxEvent we want to update
     *   }
     * })
     */
    upsert<T extends OutboxEventUpsertArgs>(args: SelectSubset<T, OutboxEventUpsertArgs<ExtArgs>>): Prisma__OutboxEventClient<$Result.GetResult<Prisma.$OutboxEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutboxEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventCountArgs} args - Arguments to filter OutboxEvents to count.
     * @example
     * // Count the number of OutboxEvents
     * const count = await prisma.outboxEvent.count({
     *   where: {
     *     // ... the filter for the OutboxEvents we want to count
     *   }
     * })
    **/
    count<T extends OutboxEventCountArgs>(
      args?: Subset<T, OutboxEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutboxEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutboxEventAggregateArgs>(args: Subset<T, OutboxEventAggregateArgs>): Prisma.PrismaPromise<GetOutboxEventAggregateType<T>>

    /**
     * Group by OutboxEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutboxEventGroupByArgs} args - Group by arguments.
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
      T extends OutboxEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutboxEventGroupByArgs['orderBy'] }
        : { orderBy?: OutboxEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutboxEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutboxEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutboxEvent model
   */
  readonly fields: OutboxEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutboxEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutboxEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OutboxEvent model
   */
  interface OutboxEventFieldRefs {
    readonly id: FieldRef<"OutboxEvent", 'String'>
    readonly aggregateType: FieldRef<"OutboxEvent", 'String'>
    readonly aggregateId: FieldRef<"OutboxEvent", 'String'>
    readonly operation: FieldRef<"OutboxEvent", 'String'>
    readonly payloadJson: FieldRef<"OutboxEvent", 'String'>
    readonly occurredAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly sentAt: FieldRef<"OutboxEvent", 'DateTime'>
    readonly attemptCount: FieldRef<"OutboxEvent", 'Int'>
    readonly lastError: FieldRef<"OutboxEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OutboxEvent findUnique
   */
  export type OutboxEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findUniqueOrThrow
   */
  export type OutboxEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent findFirst
   */
  export type OutboxEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findFirstOrThrow
   */
  export type OutboxEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvent to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent findMany
   */
  export type OutboxEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter, which OutboxEvents to fetch.
     */
    where?: OutboxEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutboxEvents to fetch.
     */
    orderBy?: OutboxEventOrderByWithRelationInput | OutboxEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutboxEvents.
     */
    cursor?: OutboxEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutboxEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutboxEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutboxEvents.
     */
    distinct?: OutboxEventScalarFieldEnum | OutboxEventScalarFieldEnum[]
  }

  /**
   * OutboxEvent create
   */
  export type OutboxEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data needed to create a OutboxEvent.
     */
    data: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
  }

  /**
   * OutboxEvent createMany
   */
  export type OutboxEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
  }

  /**
   * OutboxEvent createManyAndReturn
   */
  export type OutboxEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to create many OutboxEvents.
     */
    data: OutboxEventCreateManyInput | OutboxEventCreateManyInput[]
  }

  /**
   * OutboxEvent update
   */
  export type OutboxEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data needed to update a OutboxEvent.
     */
    data: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
    /**
     * Choose, which OutboxEvent to update.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent updateMany
   */
  export type OutboxEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
  }

  /**
   * OutboxEvent updateManyAndReturn
   */
  export type OutboxEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The data used to update OutboxEvents.
     */
    data: XOR<OutboxEventUpdateManyMutationInput, OutboxEventUncheckedUpdateManyInput>
    /**
     * Filter which OutboxEvents to update
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to update.
     */
    limit?: number
  }

  /**
   * OutboxEvent upsert
   */
  export type OutboxEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * The filter to search for the OutboxEvent to update in case it exists.
     */
    where: OutboxEventWhereUniqueInput
    /**
     * In case the OutboxEvent found by the `where` argument doesn't exist, create a new OutboxEvent with this data.
     */
    create: XOR<OutboxEventCreateInput, OutboxEventUncheckedCreateInput>
    /**
     * In case the OutboxEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutboxEventUpdateInput, OutboxEventUncheckedUpdateInput>
  }

  /**
   * OutboxEvent delete
   */
  export type OutboxEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
    /**
     * Filter which OutboxEvent to delete.
     */
    where: OutboxEventWhereUniqueInput
  }

  /**
   * OutboxEvent deleteMany
   */
  export type OutboxEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutboxEvents to delete
     */
    where?: OutboxEventWhereInput
    /**
     * Limit how many OutboxEvents to delete.
     */
    limit?: number
  }

  /**
   * OutboxEvent without action
   */
  export type OutboxEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutboxEvent
     */
    select?: OutboxEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutboxEvent
     */
    omit?: OutboxEventOmit<ExtArgs> | null
  }


  /**
   * Model SyncState
   */

  export type AggregateSyncState = {
    _count: SyncStateCountAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  export type SyncStateMinAggregateOutputType = {
    id: string | null
    mode: string | null
    lastEntity: string | null
    lastCursorCreatedAt: Date | null
    lastCursorId: string | null
    lastAppliedAt: Date | null
    lastRunStatus: string | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncStateMaxAggregateOutputType = {
    id: string | null
    mode: string | null
    lastEntity: string | null
    lastCursorCreatedAt: Date | null
    lastCursorId: string | null
    lastAppliedAt: Date | null
    lastRunStatus: string | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncStateCountAggregateOutputType = {
    id: number
    mode: number
    lastEntity: number
    lastCursorCreatedAt: number
    lastCursorId: number
    lastAppliedAt: number
    lastRunStatus: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SyncStateMinAggregateInputType = {
    id?: true
    mode?: true
    lastEntity?: true
    lastCursorCreatedAt?: true
    lastCursorId?: true
    lastAppliedAt?: true
    lastRunStatus?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncStateMaxAggregateInputType = {
    id?: true
    mode?: true
    lastEntity?: true
    lastCursorCreatedAt?: true
    lastCursorId?: true
    lastAppliedAt?: true
    lastRunStatus?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncStateCountAggregateInputType = {
    id?: true
    mode?: true
    lastEntity?: true
    lastCursorCreatedAt?: true
    lastCursorId?: true
    lastAppliedAt?: true
    lastRunStatus?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncState to aggregate.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncStates
    **/
    _count?: true | SyncStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncStateMaxAggregateInputType
  }

  export type GetSyncStateAggregateType<T extends SyncStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncState[P]>
      : GetScalarType<T[P], AggregateSyncState[P]>
  }




  export type SyncStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncStateWhereInput
    orderBy?: SyncStateOrderByWithAggregationInput | SyncStateOrderByWithAggregationInput[]
    by: SyncStateScalarFieldEnum[] | SyncStateScalarFieldEnum
    having?: SyncStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncStateCountAggregateInputType | true
    _min?: SyncStateMinAggregateInputType
    _max?: SyncStateMaxAggregateInputType
  }

  export type SyncStateGroupByOutputType = {
    id: string
    mode: string
    lastEntity: string | null
    lastCursorCreatedAt: Date | null
    lastCursorId: string | null
    lastAppliedAt: Date | null
    lastRunStatus: string | null
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: SyncStateCountAggregateOutputType | null
    _min: SyncStateMinAggregateOutputType | null
    _max: SyncStateMaxAggregateOutputType | null
  }

  type GetSyncStateGroupByPayload<T extends SyncStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
            : GetScalarType<T[P], SyncStateGroupByOutputType[P]>
        }
      >
    >


  export type SyncStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    lastEntity?: boolean
    lastCursorCreatedAt?: boolean
    lastCursorId?: boolean
    lastAppliedAt?: boolean
    lastRunStatus?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    lastEntity?: boolean
    lastCursorCreatedAt?: boolean
    lastCursorId?: boolean
    lastAppliedAt?: boolean
    lastRunStatus?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    lastEntity?: boolean
    lastCursorCreatedAt?: boolean
    lastCursorId?: boolean
    lastAppliedAt?: boolean
    lastRunStatus?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["syncState"]>

  export type SyncStateSelectScalar = {
    id?: boolean
    mode?: boolean
    lastEntity?: boolean
    lastCursorCreatedAt?: boolean
    lastCursorId?: boolean
    lastAppliedAt?: boolean
    lastRunStatus?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SyncStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mode" | "lastEntity" | "lastCursorCreatedAt" | "lastCursorId" | "lastAppliedAt" | "lastRunStatus" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["syncState"]>

  export type $SyncStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mode: string
      lastEntity: string | null
      lastCursorCreatedAt: Date | null
      lastCursorId: string | null
      lastAppliedAt: Date | null
      lastRunStatus: string | null
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["syncState"]>
    composites: {}
  }

  type SyncStateGetPayload<S extends boolean | null | undefined | SyncStateDefaultArgs> = $Result.GetResult<Prisma.$SyncStatePayload, S>

  type SyncStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncStateCountAggregateInputType | true
    }

  export interface SyncStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncState'], meta: { name: 'SyncState' } }
    /**
     * Find zero or one SyncState that matches the filter.
     * @param {SyncStateFindUniqueArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncStateFindUniqueArgs>(args: SelectSubset<T, SyncStateFindUniqueArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncStateFindUniqueOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncStateFindFirstArgs>(args?: SelectSubset<T, SyncStateFindFirstArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindFirstOrThrowArgs} args - Arguments to find a SyncState
     * @example
     * // Get one SyncState
     * const syncState = await prisma.syncState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncStates
     * const syncStates = await prisma.syncState.findMany()
     * 
     * // Get first 10 SyncStates
     * const syncStates = await prisma.syncState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncStateWithIdOnly = await prisma.syncState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncStateFindManyArgs>(args?: SelectSubset<T, SyncStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncState.
     * @param {SyncStateCreateArgs} args - Arguments to create a SyncState.
     * @example
     * // Create one SyncState
     * const SyncState = await prisma.syncState.create({
     *   data: {
     *     // ... data to create a SyncState
     *   }
     * })
     * 
     */
    create<T extends SyncStateCreateArgs>(args: SelectSubset<T, SyncStateCreateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncStates.
     * @param {SyncStateCreateManyArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncStateCreateManyArgs>(args?: SelectSubset<T, SyncStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncStates and returns the data saved in the database.
     * @param {SyncStateCreateManyAndReturnArgs} args - Arguments to create many SyncStates.
     * @example
     * // Create many SyncStates
     * const syncState = await prisma.syncState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncState.
     * @param {SyncStateDeleteArgs} args - Arguments to delete one SyncState.
     * @example
     * // Delete one SyncState
     * const SyncState = await prisma.syncState.delete({
     *   where: {
     *     // ... filter to delete one SyncState
     *   }
     * })
     * 
     */
    delete<T extends SyncStateDeleteArgs>(args: SelectSubset<T, SyncStateDeleteArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncState.
     * @param {SyncStateUpdateArgs} args - Arguments to update one SyncState.
     * @example
     * // Update one SyncState
     * const syncState = await prisma.syncState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncStateUpdateArgs>(args: SelectSubset<T, SyncStateUpdateArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncStates.
     * @param {SyncStateDeleteManyArgs} args - Arguments to filter SyncStates to delete.
     * @example
     * // Delete a few SyncStates
     * const { count } = await prisma.syncState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncStateDeleteManyArgs>(args?: SelectSubset<T, SyncStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncStateUpdateManyArgs>(args: SelectSubset<T, SyncStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncStates and returns the data updated in the database.
     * @param {SyncStateUpdateManyAndReturnArgs} args - Arguments to update many SyncStates.
     * @example
     * // Update many SyncStates
     * const syncState = await prisma.syncState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncStates and only return the `id`
     * const syncStateWithIdOnly = await prisma.syncState.updateManyAndReturn({
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
    updateManyAndReturn<T extends SyncStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncState.
     * @param {SyncStateUpsertArgs} args - Arguments to update or create a SyncState.
     * @example
     * // Update or create a SyncState
     * const syncState = await prisma.syncState.upsert({
     *   create: {
     *     // ... data to create a SyncState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncState we want to update
     *   }
     * })
     */
    upsert<T extends SyncStateUpsertArgs>(args: SelectSubset<T, SyncStateUpsertArgs<ExtArgs>>): Prisma__SyncStateClient<$Result.GetResult<Prisma.$SyncStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateCountArgs} args - Arguments to filter SyncStates to count.
     * @example
     * // Count the number of SyncStates
     * const count = await prisma.syncState.count({
     *   where: {
     *     // ... the filter for the SyncStates we want to count
     *   }
     * })
    **/
    count<T extends SyncStateCountArgs>(
      args?: Subset<T, SyncStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SyncStateAggregateArgs>(args: Subset<T, SyncStateAggregateArgs>): Prisma.PrismaPromise<GetSyncStateAggregateType<T>>

    /**
     * Group by SyncState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncStateGroupByArgs} args - Group by arguments.
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
      T extends SyncStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncStateGroupByArgs['orderBy'] }
        : { orderBy?: SyncStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SyncStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncState model
   */
  readonly fields: SyncStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SyncState model
   */
  interface SyncStateFieldRefs {
    readonly id: FieldRef<"SyncState", 'String'>
    readonly mode: FieldRef<"SyncState", 'String'>
    readonly lastEntity: FieldRef<"SyncState", 'String'>
    readonly lastCursorCreatedAt: FieldRef<"SyncState", 'DateTime'>
    readonly lastCursorId: FieldRef<"SyncState", 'String'>
    readonly lastAppliedAt: FieldRef<"SyncState", 'DateTime'>
    readonly lastRunStatus: FieldRef<"SyncState", 'String'>
    readonly lastError: FieldRef<"SyncState", 'String'>
    readonly createdAt: FieldRef<"SyncState", 'DateTime'>
    readonly updatedAt: FieldRef<"SyncState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncState findUnique
   */
  export type SyncStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findUniqueOrThrow
   */
  export type SyncStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState findFirst
   */
  export type SyncStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findFirstOrThrow
   */
  export type SyncStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncState to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState findMany
   */
  export type SyncStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter, which SyncStates to fetch.
     */
    where?: SyncStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncStates to fetch.
     */
    orderBy?: SyncStateOrderByWithRelationInput | SyncStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncStates.
     */
    cursor?: SyncStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncStates.
     */
    distinct?: SyncStateScalarFieldEnum | SyncStateScalarFieldEnum[]
  }

  /**
   * SyncState create
   */
  export type SyncStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncState.
     */
    data: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
  }

  /**
   * SyncState createMany
   */
  export type SyncStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
  }

  /**
   * SyncState createManyAndReturn
   */
  export type SyncStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to create many SyncStates.
     */
    data: SyncStateCreateManyInput | SyncStateCreateManyInput[]
  }

  /**
   * SyncState update
   */
  export type SyncStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncState.
     */
    data: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
    /**
     * Choose, which SyncState to update.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState updateMany
   */
  export type SyncStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState updateManyAndReturn
   */
  export type SyncStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The data used to update SyncStates.
     */
    data: XOR<SyncStateUpdateManyMutationInput, SyncStateUncheckedUpdateManyInput>
    /**
     * Filter which SyncStates to update
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to update.
     */
    limit?: number
  }

  /**
   * SyncState upsert
   */
  export type SyncStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncState to update in case it exists.
     */
    where: SyncStateWhereUniqueInput
    /**
     * In case the SyncState found by the `where` argument doesn't exist, create a new SyncState with this data.
     */
    create: XOR<SyncStateCreateInput, SyncStateUncheckedCreateInput>
    /**
     * In case the SyncState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncStateUpdateInput, SyncStateUncheckedUpdateInput>
  }

  /**
   * SyncState delete
   */
  export type SyncStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
    /**
     * Filter which SyncState to delete.
     */
    where: SyncStateWhereUniqueInput
  }

  /**
   * SyncState deleteMany
   */
  export type SyncStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncStates to delete
     */
    where?: SyncStateWhereInput
    /**
     * Limit how many SyncStates to delete.
     */
    limit?: number
  }

  /**
   * SyncState without action
   */
  export type SyncStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncState
     */
    select?: SyncStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncState
     */
    omit?: SyncStateOmit<ExtArgs> | null
  }


  /**
   * Model ReconciliationLog
   */

  export type AggregateReconciliationLog = {
    _count: ReconciliationLogCountAggregateOutputType | null
    _min: ReconciliationLogMinAggregateOutputType | null
    _max: ReconciliationLogMaxAggregateOutputType | null
  }

  export type ReconciliationLogMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    reason: string | null
    remoteCreatedAt: Date | null
    localCreatedAt: Date | null
    createdAt: Date | null
  }

  export type ReconciliationLogMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    reason: string | null
    remoteCreatedAt: Date | null
    localCreatedAt: Date | null
    createdAt: Date | null
  }

  export type ReconciliationLogCountAggregateOutputType = {
    id: number
    batchId: number
    entityType: number
    entityId: number
    action: number
    reason: number
    remoteCreatedAt: number
    localCreatedAt: number
    createdAt: number
    _all: number
  }


  export type ReconciliationLogMinAggregateInputType = {
    id?: true
    batchId?: true
    entityType?: true
    entityId?: true
    action?: true
    reason?: true
    remoteCreatedAt?: true
    localCreatedAt?: true
    createdAt?: true
  }

  export type ReconciliationLogMaxAggregateInputType = {
    id?: true
    batchId?: true
    entityType?: true
    entityId?: true
    action?: true
    reason?: true
    remoteCreatedAt?: true
    localCreatedAt?: true
    createdAt?: true
  }

  export type ReconciliationLogCountAggregateInputType = {
    id?: true
    batchId?: true
    entityType?: true
    entityId?: true
    action?: true
    reason?: true
    remoteCreatedAt?: true
    localCreatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReconciliationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReconciliationLog to aggregate.
     */
    where?: ReconciliationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationLogs to fetch.
     */
    orderBy?: ReconciliationLogOrderByWithRelationInput | ReconciliationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReconciliationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReconciliationLogs
    **/
    _count?: true | ReconciliationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReconciliationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReconciliationLogMaxAggregateInputType
  }

  export type GetReconciliationLogAggregateType<T extends ReconciliationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateReconciliationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReconciliationLog[P]>
      : GetScalarType<T[P], AggregateReconciliationLog[P]>
  }




  export type ReconciliationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReconciliationLogWhereInput
    orderBy?: ReconciliationLogOrderByWithAggregationInput | ReconciliationLogOrderByWithAggregationInput[]
    by: ReconciliationLogScalarFieldEnum[] | ReconciliationLogScalarFieldEnum
    having?: ReconciliationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReconciliationLogCountAggregateInputType | true
    _min?: ReconciliationLogMinAggregateInputType
    _max?: ReconciliationLogMaxAggregateInputType
  }

  export type ReconciliationLogGroupByOutputType = {
    id: string
    batchId: string
    entityType: string
    entityId: string
    action: string
    reason: string | null
    remoteCreatedAt: Date | null
    localCreatedAt: Date | null
    createdAt: Date
    _count: ReconciliationLogCountAggregateOutputType | null
    _min: ReconciliationLogMinAggregateOutputType | null
    _max: ReconciliationLogMaxAggregateOutputType | null
  }

  type GetReconciliationLogGroupByPayload<T extends ReconciliationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReconciliationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReconciliationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReconciliationLogGroupByOutputType[P]>
            : GetScalarType<T[P], ReconciliationLogGroupByOutputType[P]>
        }
      >
    >


  export type ReconciliationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    reason?: boolean
    remoteCreatedAt?: boolean
    localCreatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reconciliationLog"]>

  export type ReconciliationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    reason?: boolean
    remoteCreatedAt?: boolean
    localCreatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reconciliationLog"]>

  export type ReconciliationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    reason?: boolean
    remoteCreatedAt?: boolean
    localCreatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reconciliationLog"]>

  export type ReconciliationLogSelectScalar = {
    id?: boolean
    batchId?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    reason?: boolean
    remoteCreatedAt?: boolean
    localCreatedAt?: boolean
    createdAt?: boolean
  }

  export type ReconciliationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "entityType" | "entityId" | "action" | "reason" | "remoteCreatedAt" | "localCreatedAt" | "createdAt", ExtArgs["result"]["reconciliationLog"]>

  export type $ReconciliationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReconciliationLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      entityType: string
      entityId: string
      action: string
      reason: string | null
      remoteCreatedAt: Date | null
      localCreatedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["reconciliationLog"]>
    composites: {}
  }

  type ReconciliationLogGetPayload<S extends boolean | null | undefined | ReconciliationLogDefaultArgs> = $Result.GetResult<Prisma.$ReconciliationLogPayload, S>

  type ReconciliationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReconciliationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReconciliationLogCountAggregateInputType | true
    }

  export interface ReconciliationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReconciliationLog'], meta: { name: 'ReconciliationLog' } }
    /**
     * Find zero or one ReconciliationLog that matches the filter.
     * @param {ReconciliationLogFindUniqueArgs} args - Arguments to find a ReconciliationLog
     * @example
     * // Get one ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReconciliationLogFindUniqueArgs>(args: SelectSubset<T, ReconciliationLogFindUniqueArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReconciliationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReconciliationLogFindUniqueOrThrowArgs} args - Arguments to find a ReconciliationLog
     * @example
     * // Get one ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReconciliationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ReconciliationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReconciliationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogFindFirstArgs} args - Arguments to find a ReconciliationLog
     * @example
     * // Get one ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReconciliationLogFindFirstArgs>(args?: SelectSubset<T, ReconciliationLogFindFirstArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReconciliationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogFindFirstOrThrowArgs} args - Arguments to find a ReconciliationLog
     * @example
     * // Get one ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReconciliationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ReconciliationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReconciliationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReconciliationLogs
     * const reconciliationLogs = await prisma.reconciliationLog.findMany()
     * 
     * // Get first 10 ReconciliationLogs
     * const reconciliationLogs = await prisma.reconciliationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reconciliationLogWithIdOnly = await prisma.reconciliationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReconciliationLogFindManyArgs>(args?: SelectSubset<T, ReconciliationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReconciliationLog.
     * @param {ReconciliationLogCreateArgs} args - Arguments to create a ReconciliationLog.
     * @example
     * // Create one ReconciliationLog
     * const ReconciliationLog = await prisma.reconciliationLog.create({
     *   data: {
     *     // ... data to create a ReconciliationLog
     *   }
     * })
     * 
     */
    create<T extends ReconciliationLogCreateArgs>(args: SelectSubset<T, ReconciliationLogCreateArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReconciliationLogs.
     * @param {ReconciliationLogCreateManyArgs} args - Arguments to create many ReconciliationLogs.
     * @example
     * // Create many ReconciliationLogs
     * const reconciliationLog = await prisma.reconciliationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReconciliationLogCreateManyArgs>(args?: SelectSubset<T, ReconciliationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReconciliationLogs and returns the data saved in the database.
     * @param {ReconciliationLogCreateManyAndReturnArgs} args - Arguments to create many ReconciliationLogs.
     * @example
     * // Create many ReconciliationLogs
     * const reconciliationLog = await prisma.reconciliationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReconciliationLogs and only return the `id`
     * const reconciliationLogWithIdOnly = await prisma.reconciliationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReconciliationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ReconciliationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReconciliationLog.
     * @param {ReconciliationLogDeleteArgs} args - Arguments to delete one ReconciliationLog.
     * @example
     * // Delete one ReconciliationLog
     * const ReconciliationLog = await prisma.reconciliationLog.delete({
     *   where: {
     *     // ... filter to delete one ReconciliationLog
     *   }
     * })
     * 
     */
    delete<T extends ReconciliationLogDeleteArgs>(args: SelectSubset<T, ReconciliationLogDeleteArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReconciliationLog.
     * @param {ReconciliationLogUpdateArgs} args - Arguments to update one ReconciliationLog.
     * @example
     * // Update one ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReconciliationLogUpdateArgs>(args: SelectSubset<T, ReconciliationLogUpdateArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReconciliationLogs.
     * @param {ReconciliationLogDeleteManyArgs} args - Arguments to filter ReconciliationLogs to delete.
     * @example
     * // Delete a few ReconciliationLogs
     * const { count } = await prisma.reconciliationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReconciliationLogDeleteManyArgs>(args?: SelectSubset<T, ReconciliationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReconciliationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReconciliationLogs
     * const reconciliationLog = await prisma.reconciliationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReconciliationLogUpdateManyArgs>(args: SelectSubset<T, ReconciliationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReconciliationLogs and returns the data updated in the database.
     * @param {ReconciliationLogUpdateManyAndReturnArgs} args - Arguments to update many ReconciliationLogs.
     * @example
     * // Update many ReconciliationLogs
     * const reconciliationLog = await prisma.reconciliationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReconciliationLogs and only return the `id`
     * const reconciliationLogWithIdOnly = await prisma.reconciliationLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReconciliationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ReconciliationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReconciliationLog.
     * @param {ReconciliationLogUpsertArgs} args - Arguments to update or create a ReconciliationLog.
     * @example
     * // Update or create a ReconciliationLog
     * const reconciliationLog = await prisma.reconciliationLog.upsert({
     *   create: {
     *     // ... data to create a ReconciliationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReconciliationLog we want to update
     *   }
     * })
     */
    upsert<T extends ReconciliationLogUpsertArgs>(args: SelectSubset<T, ReconciliationLogUpsertArgs<ExtArgs>>): Prisma__ReconciliationLogClient<$Result.GetResult<Prisma.$ReconciliationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReconciliationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogCountArgs} args - Arguments to filter ReconciliationLogs to count.
     * @example
     * // Count the number of ReconciliationLogs
     * const count = await prisma.reconciliationLog.count({
     *   where: {
     *     // ... the filter for the ReconciliationLogs we want to count
     *   }
     * })
    **/
    count<T extends ReconciliationLogCountArgs>(
      args?: Subset<T, ReconciliationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReconciliationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReconciliationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReconciliationLogAggregateArgs>(args: Subset<T, ReconciliationLogAggregateArgs>): Prisma.PrismaPromise<GetReconciliationLogAggregateType<T>>

    /**
     * Group by ReconciliationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReconciliationLogGroupByArgs} args - Group by arguments.
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
      T extends ReconciliationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReconciliationLogGroupByArgs['orderBy'] }
        : { orderBy?: ReconciliationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReconciliationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReconciliationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReconciliationLog model
   */
  readonly fields: ReconciliationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReconciliationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReconciliationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReconciliationLog model
   */
  interface ReconciliationLogFieldRefs {
    readonly id: FieldRef<"ReconciliationLog", 'String'>
    readonly batchId: FieldRef<"ReconciliationLog", 'String'>
    readonly entityType: FieldRef<"ReconciliationLog", 'String'>
    readonly entityId: FieldRef<"ReconciliationLog", 'String'>
    readonly action: FieldRef<"ReconciliationLog", 'String'>
    readonly reason: FieldRef<"ReconciliationLog", 'String'>
    readonly remoteCreatedAt: FieldRef<"ReconciliationLog", 'DateTime'>
    readonly localCreatedAt: FieldRef<"ReconciliationLog", 'DateTime'>
    readonly createdAt: FieldRef<"ReconciliationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReconciliationLog findUnique
   */
  export type ReconciliationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter, which ReconciliationLog to fetch.
     */
    where: ReconciliationLogWhereUniqueInput
  }

  /**
   * ReconciliationLog findUniqueOrThrow
   */
  export type ReconciliationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter, which ReconciliationLog to fetch.
     */
    where: ReconciliationLogWhereUniqueInput
  }

  /**
   * ReconciliationLog findFirst
   */
  export type ReconciliationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter, which ReconciliationLog to fetch.
     */
    where?: ReconciliationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationLogs to fetch.
     */
    orderBy?: ReconciliationLogOrderByWithRelationInput | ReconciliationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReconciliationLogs.
     */
    cursor?: ReconciliationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReconciliationLogs.
     */
    distinct?: ReconciliationLogScalarFieldEnum | ReconciliationLogScalarFieldEnum[]
  }

  /**
   * ReconciliationLog findFirstOrThrow
   */
  export type ReconciliationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter, which ReconciliationLog to fetch.
     */
    where?: ReconciliationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationLogs to fetch.
     */
    orderBy?: ReconciliationLogOrderByWithRelationInput | ReconciliationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReconciliationLogs.
     */
    cursor?: ReconciliationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReconciliationLogs.
     */
    distinct?: ReconciliationLogScalarFieldEnum | ReconciliationLogScalarFieldEnum[]
  }

  /**
   * ReconciliationLog findMany
   */
  export type ReconciliationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter, which ReconciliationLogs to fetch.
     */
    where?: ReconciliationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReconciliationLogs to fetch.
     */
    orderBy?: ReconciliationLogOrderByWithRelationInput | ReconciliationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReconciliationLogs.
     */
    cursor?: ReconciliationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReconciliationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReconciliationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReconciliationLogs.
     */
    distinct?: ReconciliationLogScalarFieldEnum | ReconciliationLogScalarFieldEnum[]
  }

  /**
   * ReconciliationLog create
   */
  export type ReconciliationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ReconciliationLog.
     */
    data: XOR<ReconciliationLogCreateInput, ReconciliationLogUncheckedCreateInput>
  }

  /**
   * ReconciliationLog createMany
   */
  export type ReconciliationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReconciliationLogs.
     */
    data: ReconciliationLogCreateManyInput | ReconciliationLogCreateManyInput[]
  }

  /**
   * ReconciliationLog createManyAndReturn
   */
  export type ReconciliationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * The data used to create many ReconciliationLogs.
     */
    data: ReconciliationLogCreateManyInput | ReconciliationLogCreateManyInput[]
  }

  /**
   * ReconciliationLog update
   */
  export type ReconciliationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ReconciliationLog.
     */
    data: XOR<ReconciliationLogUpdateInput, ReconciliationLogUncheckedUpdateInput>
    /**
     * Choose, which ReconciliationLog to update.
     */
    where: ReconciliationLogWhereUniqueInput
  }

  /**
   * ReconciliationLog updateMany
   */
  export type ReconciliationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReconciliationLogs.
     */
    data: XOR<ReconciliationLogUpdateManyMutationInput, ReconciliationLogUncheckedUpdateManyInput>
    /**
     * Filter which ReconciliationLogs to update
     */
    where?: ReconciliationLogWhereInput
    /**
     * Limit how many ReconciliationLogs to update.
     */
    limit?: number
  }

  /**
   * ReconciliationLog updateManyAndReturn
   */
  export type ReconciliationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * The data used to update ReconciliationLogs.
     */
    data: XOR<ReconciliationLogUpdateManyMutationInput, ReconciliationLogUncheckedUpdateManyInput>
    /**
     * Filter which ReconciliationLogs to update
     */
    where?: ReconciliationLogWhereInput
    /**
     * Limit how many ReconciliationLogs to update.
     */
    limit?: number
  }

  /**
   * ReconciliationLog upsert
   */
  export type ReconciliationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ReconciliationLog to update in case it exists.
     */
    where: ReconciliationLogWhereUniqueInput
    /**
     * In case the ReconciliationLog found by the `where` argument doesn't exist, create a new ReconciliationLog with this data.
     */
    create: XOR<ReconciliationLogCreateInput, ReconciliationLogUncheckedCreateInput>
    /**
     * In case the ReconciliationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReconciliationLogUpdateInput, ReconciliationLogUncheckedUpdateInput>
  }

  /**
   * ReconciliationLog delete
   */
  export type ReconciliationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
    /**
     * Filter which ReconciliationLog to delete.
     */
    where: ReconciliationLogWhereUniqueInput
  }

  /**
   * ReconciliationLog deleteMany
   */
  export type ReconciliationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReconciliationLogs to delete
     */
    where?: ReconciliationLogWhereInput
    /**
     * Limit how many ReconciliationLogs to delete.
     */
    limit?: number
  }

  /**
   * ReconciliationLog without action
   */
  export type ReconciliationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReconciliationLog
     */
    select?: ReconciliationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReconciliationLog
     */
    omit?: ReconciliationLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    name: 'name',
    startTime: 'startTime',
    endTime: 'endTime',
    lateGraceMinutes: 'lateGraceMinutes',
    earlyLeaveGraceMinutes: 'earlyLeaveGraceMinutes',
    breakPolicyJson: 'breakPolicyJson',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const EmployeeShiftAssignmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    shiftId: 'shiftId',
    effectiveFrom: 'effectiveFrom',
    effectiveTo: 'effectiveTo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeShiftAssignmentScalarFieldEnum = (typeof EmployeeShiftAssignmentScalarFieldEnum)[keyof typeof EmployeeShiftAssignmentScalarFieldEnum]


  export const AttendanceDayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    workDate: 'workDate',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    status: 'status',
    warningFlagsJson: 'warningFlagsJson',
    workedMinutes: 'workedMinutes',
    isOffDay: 'isOffDay',
    offReason: 'offReason',
    isDeducted: 'isDeducted',
    createdBy: 'createdBy',
    updatedBy: 'updatedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceDayScalarFieldEnum = (typeof AttendanceDayScalarFieldEnum)[keyof typeof AttendanceDayScalarFieldEnum]


  export const BreakSessionScalarFieldEnum: {
    id: 'id',
    attendanceDayId: 'attendanceDayId',
    breakType: 'breakType',
    startAt: 'startAt',
    endAt: 'endAt',
    durationMinutesComputed: 'durationMinutesComputed',
    createdAt: 'createdAt'
  };

  export type BreakSessionScalarFieldEnum = (typeof BreakSessionScalarFieldEnum)[keyof typeof BreakSessionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorUserId: 'actorUserId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    beforeJson: 'beforeJson',
    afterJson: 'afterJson',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const LeaveRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    dates: 'dates',
    reason: 'reason',
    status: 'status',
    reviewedBy: 'reviewedBy',
    reviewedAt: 'reviewedAt',
    rejectedReason: 'rejectedReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum]


  export const OutboxEventScalarFieldEnum: {
    id: 'id',
    aggregateType: 'aggregateType',
    aggregateId: 'aggregateId',
    operation: 'operation',
    payloadJson: 'payloadJson',
    occurredAt: 'occurredAt',
    sentAt: 'sentAt',
    attemptCount: 'attemptCount',
    lastError: 'lastError'
  };

  export type OutboxEventScalarFieldEnum = (typeof OutboxEventScalarFieldEnum)[keyof typeof OutboxEventScalarFieldEnum]


  export const SyncStateScalarFieldEnum: {
    id: 'id',
    mode: 'mode',
    lastEntity: 'lastEntity',
    lastCursorCreatedAt: 'lastCursorCreatedAt',
    lastCursorId: 'lastCursorId',
    lastAppliedAt: 'lastAppliedAt',
    lastRunStatus: 'lastRunStatus',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SyncStateScalarFieldEnum = (typeof SyncStateScalarFieldEnum)[keyof typeof SyncStateScalarFieldEnum]


  export const ReconciliationLogScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    reason: 'reason',
    remoteCreatedAt: 'remoteCreatedAt',
    localCreatedAt: 'localCreatedAt',
    createdAt: 'createdAt'
  };

  export type ReconciliationLogScalarFieldEnum = (typeof ReconciliationLogScalarFieldEnum)[keyof typeof ReconciliationLogScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'BreakType'
   */
  export type EnumBreakTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BreakType'>
    


  /**
   * Reference to a field of type 'LeaveRequestStatus'
   */
  export type EnumLeaveRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveRequestStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: StringFilter<"Shift"> | string
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    lateGraceMinutes?: IntFilter<"Shift"> | number
    earlyLeaveGraceMinutes?: IntFilter<"Shift"> | number
    breakPolicyJson?: StringFilter<"Shift"> | string
    isActive?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    assignments?: EmployeeShiftAssignmentListRelationFilter
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignments?: EmployeeShiftAssignmentOrderByRelationAggregateInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    name?: StringFilter<"Shift"> | string
    startTime?: StringFilter<"Shift"> | string
    endTime?: StringFilter<"Shift"> | string
    lateGraceMinutes?: IntFilter<"Shift"> | number
    earlyLeaveGraceMinutes?: IntFilter<"Shift"> | number
    breakPolicyJson?: StringFilter<"Shift"> | string
    isActive?: BoolFilter<"Shift"> | boolean
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    assignments?: EmployeeShiftAssignmentListRelationFilter
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _avg?: ShiftAvgOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
    _sum?: ShiftSumOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shift"> | string
    name?: StringWithAggregatesFilter<"Shift"> | string
    startTime?: StringWithAggregatesFilter<"Shift"> | string
    endTime?: StringWithAggregatesFilter<"Shift"> | string
    lateGraceMinutes?: IntWithAggregatesFilter<"Shift"> | number
    earlyLeaveGraceMinutes?: IntWithAggregatesFilter<"Shift"> | number
    breakPolicyJson?: StringWithAggregatesFilter<"Shift"> | string
    isActive?: BoolWithAggregatesFilter<"Shift"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type EmployeeShiftAssignmentWhereInput = {
    AND?: EmployeeShiftAssignmentWhereInput | EmployeeShiftAssignmentWhereInput[]
    OR?: EmployeeShiftAssignmentWhereInput[]
    NOT?: EmployeeShiftAssignmentWhereInput | EmployeeShiftAssignmentWhereInput[]
    id?: StringFilter<"EmployeeShiftAssignment"> | string
    userId?: StringFilter<"EmployeeShiftAssignment"> | string
    shiftId?: StringFilter<"EmployeeShiftAssignment"> | string
    effectiveFrom?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"EmployeeShiftAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
  }

  export type EmployeeShiftAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shift?: ShiftOrderByWithRelationInput
  }

  export type EmployeeShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeShiftAssignmentWhereInput | EmployeeShiftAssignmentWhereInput[]
    OR?: EmployeeShiftAssignmentWhereInput[]
    NOT?: EmployeeShiftAssignmentWhereInput | EmployeeShiftAssignmentWhereInput[]
    userId?: StringFilter<"EmployeeShiftAssignment"> | string
    shiftId?: StringFilter<"EmployeeShiftAssignment"> | string
    effectiveFrom?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"EmployeeShiftAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    shift?: XOR<ShiftScalarRelationFilter, ShiftWhereInput>
  }, "id">

  export type EmployeeShiftAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeShiftAssignmentCountOrderByAggregateInput
    _max?: EmployeeShiftAssignmentMaxOrderByAggregateInput
    _min?: EmployeeShiftAssignmentMinOrderByAggregateInput
  }

  export type EmployeeShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: EmployeeShiftAssignmentScalarWhereWithAggregatesInput | EmployeeShiftAssignmentScalarWhereWithAggregatesInput[]
    OR?: EmployeeShiftAssignmentScalarWhereWithAggregatesInput[]
    NOT?: EmployeeShiftAssignmentScalarWhereWithAggregatesInput | EmployeeShiftAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmployeeShiftAssignment"> | string
    userId?: StringWithAggregatesFilter<"EmployeeShiftAssignment"> | string
    shiftId?: StringWithAggregatesFilter<"EmployeeShiftAssignment"> | string
    effectiveFrom?: DateTimeWithAggregatesFilter<"EmployeeShiftAssignment"> | Date | string
    effectiveTo?: DateTimeNullableWithAggregatesFilter<"EmployeeShiftAssignment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmployeeShiftAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmployeeShiftAssignment"> | Date | string
  }

  export type AttendanceDayWhereInput = {
    AND?: AttendanceDayWhereInput | AttendanceDayWhereInput[]
    OR?: AttendanceDayWhereInput[]
    NOT?: AttendanceDayWhereInput | AttendanceDayWhereInput[]
    id?: StringFilter<"AttendanceDay"> | string
    userId?: StringFilter<"AttendanceDay"> | string
    workDate?: StringFilter<"AttendanceDay"> | string
    checkInAt?: DateTimeNullableFilter<"AttendanceDay"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"AttendanceDay"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"AttendanceDay"> | $Enums.AttendanceStatus
    warningFlagsJson?: StringFilter<"AttendanceDay"> | string
    workedMinutes?: IntNullableFilter<"AttendanceDay"> | number | null
    isOffDay?: BoolFilter<"AttendanceDay"> | boolean
    offReason?: StringNullableFilter<"AttendanceDay"> | string | null
    isDeducted?: BoolFilter<"AttendanceDay"> | boolean
    createdBy?: StringNullableFilter<"AttendanceDay"> | string | null
    updatedBy?: StringNullableFilter<"AttendanceDay"> | string | null
    createdAt?: DateTimeFilter<"AttendanceDay"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceDay"> | Date | string
    breakSessions?: BreakSessionListRelationFilter
  }

  export type AttendanceDayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    workDate?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    status?: SortOrder
    warningFlagsJson?: SortOrder
    workedMinutes?: SortOrderInput | SortOrder
    isOffDay?: SortOrder
    offReason?: SortOrderInput | SortOrder
    isDeducted?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    breakSessions?: BreakSessionOrderByRelationAggregateInput
  }

  export type AttendanceDayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_workDate?: AttendanceDayUserIdWorkDateCompoundUniqueInput
    AND?: AttendanceDayWhereInput | AttendanceDayWhereInput[]
    OR?: AttendanceDayWhereInput[]
    NOT?: AttendanceDayWhereInput | AttendanceDayWhereInput[]
    userId?: StringFilter<"AttendanceDay"> | string
    workDate?: StringFilter<"AttendanceDay"> | string
    checkInAt?: DateTimeNullableFilter<"AttendanceDay"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"AttendanceDay"> | Date | string | null
    status?: EnumAttendanceStatusFilter<"AttendanceDay"> | $Enums.AttendanceStatus
    warningFlagsJson?: StringFilter<"AttendanceDay"> | string
    workedMinutes?: IntNullableFilter<"AttendanceDay"> | number | null
    isOffDay?: BoolFilter<"AttendanceDay"> | boolean
    offReason?: StringNullableFilter<"AttendanceDay"> | string | null
    isDeducted?: BoolFilter<"AttendanceDay"> | boolean
    createdBy?: StringNullableFilter<"AttendanceDay"> | string | null
    updatedBy?: StringNullableFilter<"AttendanceDay"> | string | null
    createdAt?: DateTimeFilter<"AttendanceDay"> | Date | string
    updatedAt?: DateTimeFilter<"AttendanceDay"> | Date | string
    breakSessions?: BreakSessionListRelationFilter
  }, "id" | "userId_workDate">

  export type AttendanceDayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    workDate?: SortOrder
    checkInAt?: SortOrderInput | SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    status?: SortOrder
    warningFlagsJson?: SortOrder
    workedMinutes?: SortOrderInput | SortOrder
    isOffDay?: SortOrder
    offReason?: SortOrderInput | SortOrder
    isDeducted?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceDayCountOrderByAggregateInput
    _avg?: AttendanceDayAvgOrderByAggregateInput
    _max?: AttendanceDayMaxOrderByAggregateInput
    _min?: AttendanceDayMinOrderByAggregateInput
    _sum?: AttendanceDaySumOrderByAggregateInput
  }

  export type AttendanceDayScalarWhereWithAggregatesInput = {
    AND?: AttendanceDayScalarWhereWithAggregatesInput | AttendanceDayScalarWhereWithAggregatesInput[]
    OR?: AttendanceDayScalarWhereWithAggregatesInput[]
    NOT?: AttendanceDayScalarWhereWithAggregatesInput | AttendanceDayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceDay"> | string
    userId?: StringWithAggregatesFilter<"AttendanceDay"> | string
    workDate?: StringWithAggregatesFilter<"AttendanceDay"> | string
    checkInAt?: DateTimeNullableWithAggregatesFilter<"AttendanceDay"> | Date | string | null
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"AttendanceDay"> | Date | string | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"AttendanceDay"> | $Enums.AttendanceStatus
    warningFlagsJson?: StringWithAggregatesFilter<"AttendanceDay"> | string
    workedMinutes?: IntNullableWithAggregatesFilter<"AttendanceDay"> | number | null
    isOffDay?: BoolWithAggregatesFilter<"AttendanceDay"> | boolean
    offReason?: StringNullableWithAggregatesFilter<"AttendanceDay"> | string | null
    isDeducted?: BoolWithAggregatesFilter<"AttendanceDay"> | boolean
    createdBy?: StringNullableWithAggregatesFilter<"AttendanceDay"> | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"AttendanceDay"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AttendanceDay"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AttendanceDay"> | Date | string
  }

  export type BreakSessionWhereInput = {
    AND?: BreakSessionWhereInput | BreakSessionWhereInput[]
    OR?: BreakSessionWhereInput[]
    NOT?: BreakSessionWhereInput | BreakSessionWhereInput[]
    id?: StringFilter<"BreakSession"> | string
    attendanceDayId?: StringFilter<"BreakSession"> | string
    breakType?: EnumBreakTypeFilter<"BreakSession"> | $Enums.BreakType
    startAt?: DateTimeFilter<"BreakSession"> | Date | string
    endAt?: DateTimeNullableFilter<"BreakSession"> | Date | string | null
    durationMinutesComputed?: IntNullableFilter<"BreakSession"> | number | null
    createdAt?: DateTimeFilter<"BreakSession"> | Date | string
    attendanceDay?: XOR<AttendanceDayScalarRelationFilter, AttendanceDayWhereInput>
  }

  export type BreakSessionOrderByWithRelationInput = {
    id?: SortOrder
    attendanceDayId?: SortOrder
    breakType?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    durationMinutesComputed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    attendanceDay?: AttendanceDayOrderByWithRelationInput
  }

  export type BreakSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BreakSessionWhereInput | BreakSessionWhereInput[]
    OR?: BreakSessionWhereInput[]
    NOT?: BreakSessionWhereInput | BreakSessionWhereInput[]
    attendanceDayId?: StringFilter<"BreakSession"> | string
    breakType?: EnumBreakTypeFilter<"BreakSession"> | $Enums.BreakType
    startAt?: DateTimeFilter<"BreakSession"> | Date | string
    endAt?: DateTimeNullableFilter<"BreakSession"> | Date | string | null
    durationMinutesComputed?: IntNullableFilter<"BreakSession"> | number | null
    createdAt?: DateTimeFilter<"BreakSession"> | Date | string
    attendanceDay?: XOR<AttendanceDayScalarRelationFilter, AttendanceDayWhereInput>
  }, "id">

  export type BreakSessionOrderByWithAggregationInput = {
    id?: SortOrder
    attendanceDayId?: SortOrder
    breakType?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrderInput | SortOrder
    durationMinutesComputed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BreakSessionCountOrderByAggregateInput
    _avg?: BreakSessionAvgOrderByAggregateInput
    _max?: BreakSessionMaxOrderByAggregateInput
    _min?: BreakSessionMinOrderByAggregateInput
    _sum?: BreakSessionSumOrderByAggregateInput
  }

  export type BreakSessionScalarWhereWithAggregatesInput = {
    AND?: BreakSessionScalarWhereWithAggregatesInput | BreakSessionScalarWhereWithAggregatesInput[]
    OR?: BreakSessionScalarWhereWithAggregatesInput[]
    NOT?: BreakSessionScalarWhereWithAggregatesInput | BreakSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BreakSession"> | string
    attendanceDayId?: StringWithAggregatesFilter<"BreakSession"> | string
    breakType?: EnumBreakTypeWithAggregatesFilter<"BreakSession"> | $Enums.BreakType
    startAt?: DateTimeWithAggregatesFilter<"BreakSession"> | Date | string
    endAt?: DateTimeNullableWithAggregatesFilter<"BreakSession"> | Date | string | null
    durationMinutesComputed?: IntNullableWithAggregatesFilter<"BreakSession"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"BreakSession"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    beforeJson?: StringNullableFilter<"AuditLog"> | string | null
    afterJson?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    beforeJson?: SortOrderInput | SortOrder
    afterJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorUserId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    beforeJson?: StringNullableFilter<"AuditLog"> | string | null
    afterJson?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    beforeJson?: SortOrderInput | SortOrder
    afterJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorUserId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    beforeJson?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    afterJson?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type LeaveRequestWhereInput = {
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    id?: StringFilter<"LeaveRequest"> | string
    userId?: StringFilter<"LeaveRequest"> | string
    year?: IntFilter<"LeaveRequest"> | number
    dates?: StringFilter<"LeaveRequest"> | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveRequestStatusFilter<"LeaveRequest"> | $Enums.LeaveRequestStatus
    reviewedBy?: StringNullableFilter<"LeaveRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    rejectedReason?: StringNullableFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
  }

  export type LeaveRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    dates?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    userId?: StringFilter<"LeaveRequest"> | string
    year?: IntFilter<"LeaveRequest"> | number
    dates?: StringFilter<"LeaveRequest"> | string
    reason?: StringNullableFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveRequestStatusFilter<"LeaveRequest"> | $Enums.LeaveRequestStatus
    reviewedBy?: StringNullableFilter<"LeaveRequest"> | string | null
    reviewedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    rejectedReason?: StringNullableFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveRequest"> | Date | string
  }, "id">

  export type LeaveRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    dates?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    rejectedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeaveRequestCountOrderByAggregateInput
    _avg?: LeaveRequestAvgOrderByAggregateInput
    _max?: LeaveRequestMaxOrderByAggregateInput
    _min?: LeaveRequestMinOrderByAggregateInput
    _sum?: LeaveRequestSumOrderByAggregateInput
  }

  export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    OR?: LeaveRequestScalarWhereWithAggregatesInput[]
    NOT?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveRequest"> | string
    userId?: StringWithAggregatesFilter<"LeaveRequest"> | string
    year?: IntWithAggregatesFilter<"LeaveRequest"> | number
    dates?: StringWithAggregatesFilter<"LeaveRequest"> | string
    reason?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    status?: EnumLeaveRequestStatusWithAggregatesFilter<"LeaveRequest"> | $Enums.LeaveRequestStatus
    reviewedBy?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null
    rejectedReason?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
  }

  export type OutboxEventWhereInput = {
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    id?: StringFilter<"OutboxEvent"> | string
    aggregateType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringFilter<"OutboxEvent"> | string
    operation?: StringFilter<"OutboxEvent"> | string
    payloadJson?: StringFilter<"OutboxEvent"> | string
    occurredAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    sentAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    attemptCount?: IntFilter<"OutboxEvent"> | number
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
  }

  export type OutboxEventOrderByWithRelationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    operation?: SortOrder
    payloadJson?: SortOrder
    occurredAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    attemptCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
  }

  export type OutboxEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutboxEventWhereInput | OutboxEventWhereInput[]
    OR?: OutboxEventWhereInput[]
    NOT?: OutboxEventWhereInput | OutboxEventWhereInput[]
    aggregateType?: StringFilter<"OutboxEvent"> | string
    aggregateId?: StringFilter<"OutboxEvent"> | string
    operation?: StringFilter<"OutboxEvent"> | string
    payloadJson?: StringFilter<"OutboxEvent"> | string
    occurredAt?: DateTimeFilter<"OutboxEvent"> | Date | string
    sentAt?: DateTimeNullableFilter<"OutboxEvent"> | Date | string | null
    attemptCount?: IntFilter<"OutboxEvent"> | number
    lastError?: StringNullableFilter<"OutboxEvent"> | string | null
  }, "id">

  export type OutboxEventOrderByWithAggregationInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    operation?: SortOrder
    payloadJson?: SortOrder
    occurredAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    attemptCount?: SortOrder
    lastError?: SortOrderInput | SortOrder
    _count?: OutboxEventCountOrderByAggregateInput
    _avg?: OutboxEventAvgOrderByAggregateInput
    _max?: OutboxEventMaxOrderByAggregateInput
    _min?: OutboxEventMinOrderByAggregateInput
    _sum?: OutboxEventSumOrderByAggregateInput
  }

  export type OutboxEventScalarWhereWithAggregatesInput = {
    AND?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    OR?: OutboxEventScalarWhereWithAggregatesInput[]
    NOT?: OutboxEventScalarWhereWithAggregatesInput | OutboxEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutboxEvent"> | string
    aggregateType?: StringWithAggregatesFilter<"OutboxEvent"> | string
    aggregateId?: StringWithAggregatesFilter<"OutboxEvent"> | string
    operation?: StringWithAggregatesFilter<"OutboxEvent"> | string
    payloadJson?: StringWithAggregatesFilter<"OutboxEvent"> | string
    occurredAt?: DateTimeWithAggregatesFilter<"OutboxEvent"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"OutboxEvent"> | Date | string | null
    attemptCount?: IntWithAggregatesFilter<"OutboxEvent"> | number
    lastError?: StringNullableWithAggregatesFilter<"OutboxEvent"> | string | null
  }

  export type SyncStateWhereInput = {
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    id?: StringFilter<"SyncState"> | string
    mode?: StringFilter<"SyncState"> | string
    lastEntity?: StringNullableFilter<"SyncState"> | string | null
    lastCursorCreatedAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastCursorId?: StringNullableFilter<"SyncState"> | string | null
    lastAppliedAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastRunStatus?: StringNullableFilter<"SyncState"> | string | null
    lastError?: StringNullableFilter<"SyncState"> | string | null
    createdAt?: DateTimeFilter<"SyncState"> | Date | string
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }

  export type SyncStateOrderByWithRelationInput = {
    id?: SortOrder
    mode?: SortOrder
    lastEntity?: SortOrderInput | SortOrder
    lastCursorCreatedAt?: SortOrderInput | SortOrder
    lastCursorId?: SortOrderInput | SortOrder
    lastAppliedAt?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncStateWhereInput | SyncStateWhereInput[]
    OR?: SyncStateWhereInput[]
    NOT?: SyncStateWhereInput | SyncStateWhereInput[]
    mode?: StringFilter<"SyncState"> | string
    lastEntity?: StringNullableFilter<"SyncState"> | string | null
    lastCursorCreatedAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastCursorId?: StringNullableFilter<"SyncState"> | string | null
    lastAppliedAt?: DateTimeNullableFilter<"SyncState"> | Date | string | null
    lastRunStatus?: StringNullableFilter<"SyncState"> | string | null
    lastError?: StringNullableFilter<"SyncState"> | string | null
    createdAt?: DateTimeFilter<"SyncState"> | Date | string
    updatedAt?: DateTimeFilter<"SyncState"> | Date | string
  }, "id">

  export type SyncStateOrderByWithAggregationInput = {
    id?: SortOrder
    mode?: SortOrder
    lastEntity?: SortOrderInput | SortOrder
    lastCursorCreatedAt?: SortOrderInput | SortOrder
    lastCursorId?: SortOrderInput | SortOrder
    lastAppliedAt?: SortOrderInput | SortOrder
    lastRunStatus?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncStateCountOrderByAggregateInput
    _max?: SyncStateMaxOrderByAggregateInput
    _min?: SyncStateMinOrderByAggregateInput
  }

  export type SyncStateScalarWhereWithAggregatesInput = {
    AND?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    OR?: SyncStateScalarWhereWithAggregatesInput[]
    NOT?: SyncStateScalarWhereWithAggregatesInput | SyncStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncState"> | string
    mode?: StringWithAggregatesFilter<"SyncState"> | string
    lastEntity?: StringNullableWithAggregatesFilter<"SyncState"> | string | null
    lastCursorCreatedAt?: DateTimeNullableWithAggregatesFilter<"SyncState"> | Date | string | null
    lastCursorId?: StringNullableWithAggregatesFilter<"SyncState"> | string | null
    lastAppliedAt?: DateTimeNullableWithAggregatesFilter<"SyncState"> | Date | string | null
    lastRunStatus?: StringNullableWithAggregatesFilter<"SyncState"> | string | null
    lastError?: StringNullableWithAggregatesFilter<"SyncState"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncState"> | Date | string
  }

  export type ReconciliationLogWhereInput = {
    AND?: ReconciliationLogWhereInput | ReconciliationLogWhereInput[]
    OR?: ReconciliationLogWhereInput[]
    NOT?: ReconciliationLogWhereInput | ReconciliationLogWhereInput[]
    id?: StringFilter<"ReconciliationLog"> | string
    batchId?: StringFilter<"ReconciliationLog"> | string
    entityType?: StringFilter<"ReconciliationLog"> | string
    entityId?: StringFilter<"ReconciliationLog"> | string
    action?: StringFilter<"ReconciliationLog"> | string
    reason?: StringNullableFilter<"ReconciliationLog"> | string | null
    remoteCreatedAt?: DateTimeNullableFilter<"ReconciliationLog"> | Date | string | null
    localCreatedAt?: DateTimeNullableFilter<"ReconciliationLog"> | Date | string | null
    createdAt?: DateTimeFilter<"ReconciliationLog"> | Date | string
  }

  export type ReconciliationLogOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    reason?: SortOrderInput | SortOrder
    remoteCreatedAt?: SortOrderInput | SortOrder
    localCreatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ReconciliationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReconciliationLogWhereInput | ReconciliationLogWhereInput[]
    OR?: ReconciliationLogWhereInput[]
    NOT?: ReconciliationLogWhereInput | ReconciliationLogWhereInput[]
    batchId?: StringFilter<"ReconciliationLog"> | string
    entityType?: StringFilter<"ReconciliationLog"> | string
    entityId?: StringFilter<"ReconciliationLog"> | string
    action?: StringFilter<"ReconciliationLog"> | string
    reason?: StringNullableFilter<"ReconciliationLog"> | string | null
    remoteCreatedAt?: DateTimeNullableFilter<"ReconciliationLog"> | Date | string | null
    localCreatedAt?: DateTimeNullableFilter<"ReconciliationLog"> | Date | string | null
    createdAt?: DateTimeFilter<"ReconciliationLog"> | Date | string
  }, "id">

  export type ReconciliationLogOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    reason?: SortOrderInput | SortOrder
    remoteCreatedAt?: SortOrderInput | SortOrder
    localCreatedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReconciliationLogCountOrderByAggregateInput
    _max?: ReconciliationLogMaxOrderByAggregateInput
    _min?: ReconciliationLogMinOrderByAggregateInput
  }

  export type ReconciliationLogScalarWhereWithAggregatesInput = {
    AND?: ReconciliationLogScalarWhereWithAggregatesInput | ReconciliationLogScalarWhereWithAggregatesInput[]
    OR?: ReconciliationLogScalarWhereWithAggregatesInput[]
    NOT?: ReconciliationLogScalarWhereWithAggregatesInput | ReconciliationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReconciliationLog"> | string
    batchId?: StringWithAggregatesFilter<"ReconciliationLog"> | string
    entityType?: StringWithAggregatesFilter<"ReconciliationLog"> | string
    entityId?: StringWithAggregatesFilter<"ReconciliationLog"> | string
    action?: StringWithAggregatesFilter<"ReconciliationLog"> | string
    reason?: StringNullableWithAggregatesFilter<"ReconciliationLog"> | string | null
    remoteCreatedAt?: DateTimeNullableWithAggregatesFilter<"ReconciliationLog"> | Date | string | null
    localCreatedAt?: DateTimeNullableWithAggregatesFilter<"ReconciliationLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReconciliationLog"> | Date | string
  }

  export type ShiftCreateInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: EmployeeShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: EmployeeShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: EmployeeShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: EmployeeShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftCreateManyInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentCreateInput = {
    id?: string
    userId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shift: ShiftCreateNestedOneWithoutAssignmentsInput
  }

  export type EmployeeShiftAssignmentUncheckedCreateInput = {
    id?: string
    userId: string
    shiftId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type EmployeeShiftAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentCreateManyInput = {
    id?: string
    userId: string
    shiftId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDayCreateInput = {
    id?: string
    userId: string
    workDate: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.AttendanceStatus
    warningFlagsJson?: string
    workedMinutes?: number | null
    isOffDay?: boolean
    offReason?: string | null
    isDeducted?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breakSessions?: BreakSessionCreateNestedManyWithoutAttendanceDayInput
  }

  export type AttendanceDayUncheckedCreateInput = {
    id?: string
    userId: string
    workDate: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.AttendanceStatus
    warningFlagsJson?: string
    workedMinutes?: number | null
    isOffDay?: boolean
    offReason?: string | null
    isDeducted?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    breakSessions?: BreakSessionUncheckedCreateNestedManyWithoutAttendanceDayInput
  }

  export type AttendanceDayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakSessions?: BreakSessionUpdateManyWithoutAttendanceDayNestedInput
  }

  export type AttendanceDayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    breakSessions?: BreakSessionUncheckedUpdateManyWithoutAttendanceDayNestedInput
  }

  export type AttendanceDayCreateManyInput = {
    id?: string
    userId: string
    workDate: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.AttendanceStatus
    warningFlagsJson?: string
    workedMinutes?: number | null
    isOffDay?: boolean
    offReason?: string | null
    isDeducted?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionCreateInput = {
    id?: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
    attendanceDay: AttendanceDayCreateNestedOneWithoutBreakSessionsInput
  }

  export type BreakSessionUncheckedCreateInput = {
    id?: string
    attendanceDayId: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
  }

  export type BreakSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendanceDay?: AttendanceDayUpdateOneRequiredWithoutBreakSessionsNestedInput
  }

  export type BreakSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDayId?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionCreateManyInput = {
    id?: string
    attendanceDayId: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
  }

  export type BreakSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    attendanceDayId?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    actorUserId?: string | null
    action: string
    entityType: string
    entityId: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorUserId?: string | null
    action: string
    entityType: string
    entityId: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorUserId?: string | null
    action: string
    entityType: string
    entityId: string
    beforeJson?: string | null
    afterJson?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    beforeJson?: NullableStringFieldUpdateOperationsInput | string | null
    afterJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateInput = {
    id?: string
    userId: string
    year: number
    dates: string
    reason?: string | null
    status?: $Enums.LeaveRequestStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUncheckedCreateInput = {
    id?: string
    userId: string
    year: number
    dates: string
    reason?: string | null
    status?: $Enums.LeaveRequestStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    dates?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveRequestStatusFieldUpdateOperationsInput | $Enums.LeaveRequestStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    dates?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveRequestStatusFieldUpdateOperationsInput | $Enums.LeaveRequestStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestCreateManyInput = {
    id?: string
    userId: string
    year: number
    dates: string
    reason?: string | null
    status?: $Enums.LeaveRequestStatus
    reviewedBy?: string | null
    reviewedAt?: Date | string | null
    rejectedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LeaveRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    dates?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveRequestStatusFieldUpdateOperationsInput | $Enums.LeaveRequestStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaveRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    dates?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumLeaveRequestStatusFieldUpdateOperationsInput | $Enums.LeaveRequestStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutboxEventCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    operation: string
    payloadJson: string
    occurredAt?: Date | string
    sentAt?: Date | string | null
    attemptCount?: number
    lastError?: string | null
  }

  export type OutboxEventUncheckedCreateInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    operation: string
    payloadJson: string
    occurredAt?: Date | string
    sentAt?: Date | string | null
    attemptCount?: number
    lastError?: string | null
  }

  export type OutboxEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    payloadJson?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutboxEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    payloadJson?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutboxEventCreateManyInput = {
    id?: string
    aggregateType: string
    aggregateId: string
    operation: string
    payloadJson: string
    occurredAt?: Date | string
    sentAt?: Date | string | null
    attemptCount?: number
    lastError?: string | null
  }

  export type OutboxEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    payloadJson?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OutboxEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    aggregateType?: StringFieldUpdateOperationsInput | string
    aggregateId?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    payloadJson?: StringFieldUpdateOperationsInput | string
    occurredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attemptCount?: IntFieldUpdateOperationsInput | number
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SyncStateCreateInput = {
    id: string
    mode: string
    lastEntity?: string | null
    lastCursorCreatedAt?: Date | string | null
    lastCursorId?: string | null
    lastAppliedAt?: Date | string | null
    lastRunStatus?: string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncStateUncheckedCreateInput = {
    id: string
    mode: string
    lastEntity?: string | null
    lastCursorCreatedAt?: Date | string | null
    lastCursorId?: string | null
    lastAppliedAt?: Date | string | null
    lastRunStatus?: string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    lastEntity?: NullableStringFieldUpdateOperationsInput | string | null
    lastCursorCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCursorId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAppliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    lastEntity?: NullableStringFieldUpdateOperationsInput | string | null
    lastCursorCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCursorId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAppliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateCreateManyInput = {
    id: string
    mode: string
    lastEntity?: string | null
    lastCursorCreatedAt?: Date | string | null
    lastCursorId?: string | null
    lastAppliedAt?: Date | string | null
    lastRunStatus?: string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    lastEntity?: NullableStringFieldUpdateOperationsInput | string | null
    lastCursorCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCursorId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAppliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: StringFieldUpdateOperationsInput | string
    lastEntity?: NullableStringFieldUpdateOperationsInput | string | null
    lastCursorCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastCursorId?: NullableStringFieldUpdateOperationsInput | string | null
    lastAppliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastRunStatus?: NullableStringFieldUpdateOperationsInput | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationLogCreateInput = {
    id?: string
    batchId: string
    entityType: string
    entityId: string
    action: string
    reason?: string | null
    remoteCreatedAt?: Date | string | null
    localCreatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReconciliationLogUncheckedCreateInput = {
    id?: string
    batchId: string
    entityType: string
    entityId: string
    action: string
    reason?: string | null
    remoteCreatedAt?: Date | string | null
    localCreatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReconciliationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remoteCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remoteCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationLogCreateManyInput = {
    id?: string
    batchId: string
    entityType: string
    entityId: string
    action: string
    reason?: string | null
    remoteCreatedAt?: Date | string | null
    localCreatedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReconciliationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remoteCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReconciliationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    remoteCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    localCreatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EmployeeShiftAssignmentListRelationFilter = {
    every?: EmployeeShiftAssignmentWhereInput
    some?: EmployeeShiftAssignmentWhereInput
    none?: EmployeeShiftAssignmentWhereInput
  }

  export type EmployeeShiftAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAvgOrderByAggregateInput = {
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
    breakPolicyJson?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftSumOrderByAggregateInput = {
    lateGraceMinutes?: SortOrder
    earlyLeaveGraceMinutes?: SortOrder
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

  export type ShiftScalarRelationFilter = {
    is?: ShiftWhereInput
    isNot?: ShiftWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeShiftAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeShiftAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeShiftAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    shiftId?: SortOrder
    effectiveFrom?: SortOrder
    effectiveTo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type BreakSessionListRelationFilter = {
    every?: BreakSessionWhereInput
    some?: BreakSessionWhereInput
    none?: BreakSessionWhereInput
  }

  export type BreakSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceDayUserIdWorkDateCompoundUniqueInput = {
    userId: string
    workDate: string
  }

  export type AttendanceDayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDate?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
    warningFlagsJson?: SortOrder
    workedMinutes?: SortOrder
    isOffDay?: SortOrder
    offReason?: SortOrder
    isDeducted?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDayAvgOrderByAggregateInput = {
    workedMinutes?: SortOrder
  }

  export type AttendanceDayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDate?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
    warningFlagsJson?: SortOrder
    workedMinutes?: SortOrder
    isOffDay?: SortOrder
    offReason?: SortOrder
    isDeducted?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workDate?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    status?: SortOrder
    warningFlagsJson?: SortOrder
    workedMinutes?: SortOrder
    isOffDay?: SortOrder
    offReason?: SortOrder
    isDeducted?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceDaySumOrderByAggregateInput = {
    workedMinutes?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumBreakTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BreakType | EnumBreakTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BreakType[]
    notIn?: $Enums.BreakType[]
    not?: NestedEnumBreakTypeFilter<$PrismaModel> | $Enums.BreakType
  }

  export type AttendanceDayScalarRelationFilter = {
    is?: AttendanceDayWhereInput
    isNot?: AttendanceDayWhereInput
  }

  export type BreakSessionCountOrderByAggregateInput = {
    id?: SortOrder
    attendanceDayId?: SortOrder
    breakType?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    durationMinutesComputed?: SortOrder
    createdAt?: SortOrder
  }

  export type BreakSessionAvgOrderByAggregateInput = {
    durationMinutesComputed?: SortOrder
  }

  export type BreakSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    attendanceDayId?: SortOrder
    breakType?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    durationMinutesComputed?: SortOrder
    createdAt?: SortOrder
  }

  export type BreakSessionMinOrderByAggregateInput = {
    id?: SortOrder
    attendanceDayId?: SortOrder
    breakType?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    durationMinutesComputed?: SortOrder
    createdAt?: SortOrder
  }

  export type BreakSessionSumOrderByAggregateInput = {
    durationMinutesComputed?: SortOrder
  }

  export type EnumBreakTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BreakType | EnumBreakTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BreakType[]
    notIn?: $Enums.BreakType[]
    not?: NestedEnumBreakTypeWithAggregatesFilter<$PrismaModel> | $Enums.BreakType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBreakTypeFilter<$PrismaModel>
    _max?: NestedEnumBreakTypeFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    beforeJson?: SortOrder
    afterJson?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLeaveRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveRequestStatus | EnumLeaveRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveRequestStatus[]
    notIn?: $Enums.LeaveRequestStatus[]
    not?: NestedEnumLeaveRequestStatusFilter<$PrismaModel> | $Enums.LeaveRequestStatus
  }

  export type LeaveRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    dates?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type LeaveRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    dates?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    dates?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    reviewedAt?: SortOrder
    rejectedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeaveRequestSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type EnumLeaveRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveRequestStatus | EnumLeaveRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveRequestStatus[]
    notIn?: $Enums.LeaveRequestStatus[]
    not?: NestedEnumLeaveRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveRequestStatusFilter<$PrismaModel>
  }

  export type OutboxEventCountOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    operation?: SortOrder
    payloadJson?: SortOrder
    occurredAt?: SortOrder
    sentAt?: SortOrder
    attemptCount?: SortOrder
    lastError?: SortOrder
  }

  export type OutboxEventAvgOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type OutboxEventMaxOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    operation?: SortOrder
    payloadJson?: SortOrder
    occurredAt?: SortOrder
    sentAt?: SortOrder
    attemptCount?: SortOrder
    lastError?: SortOrder
  }

  export type OutboxEventMinOrderByAggregateInput = {
    id?: SortOrder
    aggregateType?: SortOrder
    aggregateId?: SortOrder
    operation?: SortOrder
    payloadJson?: SortOrder
    occurredAt?: SortOrder
    sentAt?: SortOrder
    attemptCount?: SortOrder
    lastError?: SortOrder
  }

  export type OutboxEventSumOrderByAggregateInput = {
    attemptCount?: SortOrder
  }

  export type SyncStateCountOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    lastEntity?: SortOrder
    lastCursorCreatedAt?: SortOrder
    lastCursorId?: SortOrder
    lastAppliedAt?: SortOrder
    lastRunStatus?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMaxOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    lastEntity?: SortOrder
    lastCursorCreatedAt?: SortOrder
    lastCursorId?: SortOrder
    lastAppliedAt?: SortOrder
    lastRunStatus?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncStateMinOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    lastEntity?: SortOrder
    lastCursorCreatedAt?: SortOrder
    lastCursorId?: SortOrder
    lastAppliedAt?: SortOrder
    lastRunStatus?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReconciliationLogCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    remoteCreatedAt?: SortOrder
    localCreatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReconciliationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    remoteCreatedAt?: SortOrder
    localCreatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReconciliationLogMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    remoteCreatedAt?: SortOrder
    localCreatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmployeeShiftAssignmentCreateNestedManyWithoutShiftInput = {
    create?: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput> | EmployeeShiftAssignmentCreateWithoutShiftInput[] | EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput | EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: EmployeeShiftAssignmentCreateManyShiftInputEnvelope
    connect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
  }

  export type EmployeeShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput> | EmployeeShiftAssignmentCreateWithoutShiftInput[] | EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput | EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput[]
    createMany?: EmployeeShiftAssignmentCreateManyShiftInputEnvelope
    connect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmployeeShiftAssignmentUpdateManyWithoutShiftNestedInput = {
    create?: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput> | EmployeeShiftAssignmentCreateWithoutShiftInput[] | EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput | EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: EmployeeShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | EmployeeShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: EmployeeShiftAssignmentCreateManyShiftInputEnvelope
    set?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    disconnect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    delete?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    connect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    update?: EmployeeShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | EmployeeShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: EmployeeShiftAssignmentUpdateManyWithWhereWithoutShiftInput | EmployeeShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: EmployeeShiftAssignmentScalarWhereInput | EmployeeShiftAssignmentScalarWhereInput[]
  }

  export type EmployeeShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput> | EmployeeShiftAssignmentCreateWithoutShiftInput[] | EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput | EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: EmployeeShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | EmployeeShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    createMany?: EmployeeShiftAssignmentCreateManyShiftInputEnvelope
    set?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    disconnect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    delete?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    connect?: EmployeeShiftAssignmentWhereUniqueInput | EmployeeShiftAssignmentWhereUniqueInput[]
    update?: EmployeeShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | EmployeeShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: EmployeeShiftAssignmentUpdateManyWithWhereWithoutShiftInput | EmployeeShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: EmployeeShiftAssignmentScalarWhereInput | EmployeeShiftAssignmentScalarWhereInput[]
  }

  export type ShiftCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ShiftUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignmentsInput
    upsert?: ShiftUpsertWithoutAssignmentsInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutAssignmentsInput, ShiftUpdateWithoutAssignmentsInput>, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type BreakSessionCreateNestedManyWithoutAttendanceDayInput = {
    create?: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput> | BreakSessionCreateWithoutAttendanceDayInput[] | BreakSessionUncheckedCreateWithoutAttendanceDayInput[]
    connectOrCreate?: BreakSessionCreateOrConnectWithoutAttendanceDayInput | BreakSessionCreateOrConnectWithoutAttendanceDayInput[]
    createMany?: BreakSessionCreateManyAttendanceDayInputEnvelope
    connect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
  }

  export type BreakSessionUncheckedCreateNestedManyWithoutAttendanceDayInput = {
    create?: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput> | BreakSessionCreateWithoutAttendanceDayInput[] | BreakSessionUncheckedCreateWithoutAttendanceDayInput[]
    connectOrCreate?: BreakSessionCreateOrConnectWithoutAttendanceDayInput | BreakSessionCreateOrConnectWithoutAttendanceDayInput[]
    createMany?: BreakSessionCreateManyAttendanceDayInputEnvelope
    connect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BreakSessionUpdateManyWithoutAttendanceDayNestedInput = {
    create?: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput> | BreakSessionCreateWithoutAttendanceDayInput[] | BreakSessionUncheckedCreateWithoutAttendanceDayInput[]
    connectOrCreate?: BreakSessionCreateOrConnectWithoutAttendanceDayInput | BreakSessionCreateOrConnectWithoutAttendanceDayInput[]
    upsert?: BreakSessionUpsertWithWhereUniqueWithoutAttendanceDayInput | BreakSessionUpsertWithWhereUniqueWithoutAttendanceDayInput[]
    createMany?: BreakSessionCreateManyAttendanceDayInputEnvelope
    set?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    disconnect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    delete?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    connect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    update?: BreakSessionUpdateWithWhereUniqueWithoutAttendanceDayInput | BreakSessionUpdateWithWhereUniqueWithoutAttendanceDayInput[]
    updateMany?: BreakSessionUpdateManyWithWhereWithoutAttendanceDayInput | BreakSessionUpdateManyWithWhereWithoutAttendanceDayInput[]
    deleteMany?: BreakSessionScalarWhereInput | BreakSessionScalarWhereInput[]
  }

  export type BreakSessionUncheckedUpdateManyWithoutAttendanceDayNestedInput = {
    create?: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput> | BreakSessionCreateWithoutAttendanceDayInput[] | BreakSessionUncheckedCreateWithoutAttendanceDayInput[]
    connectOrCreate?: BreakSessionCreateOrConnectWithoutAttendanceDayInput | BreakSessionCreateOrConnectWithoutAttendanceDayInput[]
    upsert?: BreakSessionUpsertWithWhereUniqueWithoutAttendanceDayInput | BreakSessionUpsertWithWhereUniqueWithoutAttendanceDayInput[]
    createMany?: BreakSessionCreateManyAttendanceDayInputEnvelope
    set?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    disconnect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    delete?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    connect?: BreakSessionWhereUniqueInput | BreakSessionWhereUniqueInput[]
    update?: BreakSessionUpdateWithWhereUniqueWithoutAttendanceDayInput | BreakSessionUpdateWithWhereUniqueWithoutAttendanceDayInput[]
    updateMany?: BreakSessionUpdateManyWithWhereWithoutAttendanceDayInput | BreakSessionUpdateManyWithWhereWithoutAttendanceDayInput[]
    deleteMany?: BreakSessionScalarWhereInput | BreakSessionScalarWhereInput[]
  }

  export type AttendanceDayCreateNestedOneWithoutBreakSessionsInput = {
    create?: XOR<AttendanceDayCreateWithoutBreakSessionsInput, AttendanceDayUncheckedCreateWithoutBreakSessionsInput>
    connectOrCreate?: AttendanceDayCreateOrConnectWithoutBreakSessionsInput
    connect?: AttendanceDayWhereUniqueInput
  }

  export type EnumBreakTypeFieldUpdateOperationsInput = {
    set?: $Enums.BreakType
  }

  export type AttendanceDayUpdateOneRequiredWithoutBreakSessionsNestedInput = {
    create?: XOR<AttendanceDayCreateWithoutBreakSessionsInput, AttendanceDayUncheckedCreateWithoutBreakSessionsInput>
    connectOrCreate?: AttendanceDayCreateOrConnectWithoutBreakSessionsInput
    upsert?: AttendanceDayUpsertWithoutBreakSessionsInput
    connect?: AttendanceDayWhereUniqueInput
    update?: XOR<XOR<AttendanceDayUpdateToOneWithWhereWithoutBreakSessionsInput, AttendanceDayUpdateWithoutBreakSessionsInput>, AttendanceDayUncheckedUpdateWithoutBreakSessionsInput>
  }

  export type EnumLeaveRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveRequestStatus
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

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
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

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[]
    notIn?: $Enums.AttendanceStatus[]
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumBreakTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BreakType | EnumBreakTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BreakType[]
    notIn?: $Enums.BreakType[]
    not?: NestedEnumBreakTypeFilter<$PrismaModel> | $Enums.BreakType
  }

  export type NestedEnumBreakTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BreakType | EnumBreakTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BreakType[]
    notIn?: $Enums.BreakType[]
    not?: NestedEnumBreakTypeWithAggregatesFilter<$PrismaModel> | $Enums.BreakType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBreakTypeFilter<$PrismaModel>
    _max?: NestedEnumBreakTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveRequestStatus | EnumLeaveRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveRequestStatus[]
    notIn?: $Enums.LeaveRequestStatus[]
    not?: NestedEnumLeaveRequestStatusFilter<$PrismaModel> | $Enums.LeaveRequestStatus
  }

  export type NestedEnumLeaveRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveRequestStatus | EnumLeaveRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveRequestStatus[]
    notIn?: $Enums.LeaveRequestStatus[]
    not?: NestedEnumLeaveRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveRequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveRequestStatusFilter<$PrismaModel>
  }

  export type EmployeeShiftAssignmentCreateWithoutShiftInput = {
    id?: string
    userId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput = {
    id?: string
    userId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftAssignmentCreateOrConnectWithoutShiftInput = {
    where: EmployeeShiftAssignmentWhereUniqueInput
    create: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type EmployeeShiftAssignmentCreateManyShiftInputEnvelope = {
    data: EmployeeShiftAssignmentCreateManyShiftInput | EmployeeShiftAssignmentCreateManyShiftInput[]
  }

  export type EmployeeShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput = {
    where: EmployeeShiftAssignmentWhereUniqueInput
    update: XOR<EmployeeShiftAssignmentUpdateWithoutShiftInput, EmployeeShiftAssignmentUncheckedUpdateWithoutShiftInput>
    create: XOR<EmployeeShiftAssignmentCreateWithoutShiftInput, EmployeeShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type EmployeeShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput = {
    where: EmployeeShiftAssignmentWhereUniqueInput
    data: XOR<EmployeeShiftAssignmentUpdateWithoutShiftInput, EmployeeShiftAssignmentUncheckedUpdateWithoutShiftInput>
  }

  export type EmployeeShiftAssignmentUpdateManyWithWhereWithoutShiftInput = {
    where: EmployeeShiftAssignmentScalarWhereInput
    data: XOR<EmployeeShiftAssignmentUpdateManyMutationInput, EmployeeShiftAssignmentUncheckedUpdateManyWithoutShiftInput>
  }

  export type EmployeeShiftAssignmentScalarWhereInput = {
    AND?: EmployeeShiftAssignmentScalarWhereInput | EmployeeShiftAssignmentScalarWhereInput[]
    OR?: EmployeeShiftAssignmentScalarWhereInput[]
    NOT?: EmployeeShiftAssignmentScalarWhereInput | EmployeeShiftAssignmentScalarWhereInput[]
    id?: StringFilter<"EmployeeShiftAssignment"> | string
    userId?: StringFilter<"EmployeeShiftAssignment"> | string
    shiftId?: StringFilter<"EmployeeShiftAssignment"> | string
    effectiveFrom?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    effectiveTo?: DateTimeNullableFilter<"EmployeeShiftAssignment"> | Date | string | null
    createdAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"EmployeeShiftAssignment"> | Date | string
  }

  export type ShiftCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    startTime: string
    endTime: string
    lateGraceMinutes?: number
    earlyLeaveGraceMinutes?: number
    breakPolicyJson: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutAssignmentsInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
  }

  export type ShiftUpsertWithoutAssignmentsInput = {
    update: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ShiftCreateWithoutAssignmentsInput, ShiftUncheckedCreateWithoutAssignmentsInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutAssignmentsInput, ShiftUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ShiftUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    lateGraceMinutes?: IntFieldUpdateOperationsInput | number
    earlyLeaveGraceMinutes?: IntFieldUpdateOperationsInput | number
    breakPolicyJson?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionCreateWithoutAttendanceDayInput = {
    id?: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
  }

  export type BreakSessionUncheckedCreateWithoutAttendanceDayInput = {
    id?: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
  }

  export type BreakSessionCreateOrConnectWithoutAttendanceDayInput = {
    where: BreakSessionWhereUniqueInput
    create: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput>
  }

  export type BreakSessionCreateManyAttendanceDayInputEnvelope = {
    data: BreakSessionCreateManyAttendanceDayInput | BreakSessionCreateManyAttendanceDayInput[]
  }

  export type BreakSessionUpsertWithWhereUniqueWithoutAttendanceDayInput = {
    where: BreakSessionWhereUniqueInput
    update: XOR<BreakSessionUpdateWithoutAttendanceDayInput, BreakSessionUncheckedUpdateWithoutAttendanceDayInput>
    create: XOR<BreakSessionCreateWithoutAttendanceDayInput, BreakSessionUncheckedCreateWithoutAttendanceDayInput>
  }

  export type BreakSessionUpdateWithWhereUniqueWithoutAttendanceDayInput = {
    where: BreakSessionWhereUniqueInput
    data: XOR<BreakSessionUpdateWithoutAttendanceDayInput, BreakSessionUncheckedUpdateWithoutAttendanceDayInput>
  }

  export type BreakSessionUpdateManyWithWhereWithoutAttendanceDayInput = {
    where: BreakSessionScalarWhereInput
    data: XOR<BreakSessionUpdateManyMutationInput, BreakSessionUncheckedUpdateManyWithoutAttendanceDayInput>
  }

  export type BreakSessionScalarWhereInput = {
    AND?: BreakSessionScalarWhereInput | BreakSessionScalarWhereInput[]
    OR?: BreakSessionScalarWhereInput[]
    NOT?: BreakSessionScalarWhereInput | BreakSessionScalarWhereInput[]
    id?: StringFilter<"BreakSession"> | string
    attendanceDayId?: StringFilter<"BreakSession"> | string
    breakType?: EnumBreakTypeFilter<"BreakSession"> | $Enums.BreakType
    startAt?: DateTimeFilter<"BreakSession"> | Date | string
    endAt?: DateTimeNullableFilter<"BreakSession"> | Date | string | null
    durationMinutesComputed?: IntNullableFilter<"BreakSession"> | number | null
    createdAt?: DateTimeFilter<"BreakSession"> | Date | string
  }

  export type AttendanceDayCreateWithoutBreakSessionsInput = {
    id?: string
    userId: string
    workDate: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.AttendanceStatus
    warningFlagsJson?: string
    workedMinutes?: number | null
    isOffDay?: boolean
    offReason?: string | null
    isDeducted?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDayUncheckedCreateWithoutBreakSessionsInput = {
    id?: string
    userId: string
    workDate: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    status?: $Enums.AttendanceStatus
    warningFlagsJson?: string
    workedMinutes?: number | null
    isOffDay?: boolean
    offReason?: string | null
    isDeducted?: boolean
    createdBy?: string | null
    updatedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceDayCreateOrConnectWithoutBreakSessionsInput = {
    where: AttendanceDayWhereUniqueInput
    create: XOR<AttendanceDayCreateWithoutBreakSessionsInput, AttendanceDayUncheckedCreateWithoutBreakSessionsInput>
  }

  export type AttendanceDayUpsertWithoutBreakSessionsInput = {
    update: XOR<AttendanceDayUpdateWithoutBreakSessionsInput, AttendanceDayUncheckedUpdateWithoutBreakSessionsInput>
    create: XOR<AttendanceDayCreateWithoutBreakSessionsInput, AttendanceDayUncheckedCreateWithoutBreakSessionsInput>
    where?: AttendanceDayWhereInput
  }

  export type AttendanceDayUpdateToOneWithWhereWithoutBreakSessionsInput = {
    where?: AttendanceDayWhereInput
    data: XOR<AttendanceDayUpdateWithoutBreakSessionsInput, AttendanceDayUncheckedUpdateWithoutBreakSessionsInput>
  }

  export type AttendanceDayUpdateWithoutBreakSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceDayUncheckedUpdateWithoutBreakSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    workDate?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    warningFlagsJson?: StringFieldUpdateOperationsInput | string
    workedMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    isOffDay?: BoolFieldUpdateOperationsInput | boolean
    offReason?: NullableStringFieldUpdateOperationsInput | string | null
    isDeducted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentCreateManyShiftInput = {
    id?: string
    userId: string
    effectiveFrom: Date | string
    effectiveTo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeShiftAssignmentUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentUncheckedUpdateWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeShiftAssignmentUncheckedUpdateManyWithoutShiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    effectiveTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionCreateManyAttendanceDayInput = {
    id?: string
    breakType: $Enums.BreakType
    startAt: Date | string
    endAt?: Date | string | null
    durationMinutesComputed?: number | null
    createdAt?: Date | string
  }

  export type BreakSessionUpdateWithoutAttendanceDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionUncheckedUpdateWithoutAttendanceDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BreakSessionUncheckedUpdateManyWithoutAttendanceDayInput = {
    id?: StringFieldUpdateOperationsInput | string
    breakType?: EnumBreakTypeFieldUpdateOperationsInput | $Enums.BreakType
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMinutesComputed?: NullableIntFieldUpdateOperationsInput | number | null
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