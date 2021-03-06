export let queries = {
  queryBuilder: {
    derivedRegular     : 'select distinct * from (select * from `todo` as `t`) as alias_derived',
    derivedCreatesAlias: 'select distinct * from (select * from `todo` as `t`) as todo0',
    selectAll          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t`",
    selectOne          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t`",
    selectArray        : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t`",
    selectSum          : "select sum(`t`.`id`) from `todo` as `t`",
    insert             : "insert into `todo` (`task`, `done`) values ('Bake cake', true)",
    update             : "update `todo` set `done` = true where `id` = 1",
    limit              : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` limit 69",
    offset             : "select `t`.`id` as `t.id`, `t`.`done` as `t.done` from `todo` as `t` limit 5 offset 15",
    orderByAsc         : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` order by `t`.`task` asc",
    orderByDesc        : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` order by `t`.`done` desc",
    orderByDescObj     : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` order by `t`.`task` desc",
    orderByDescArr     : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` order by `t`.`task` asc, `t`.`done` desc",
    deleteById         : "delete from `todo` where `id` = 1",
    where              : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` where `t`.`done` = true",
    whereIn            : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` where `t`.`task` in ('Pet cat', 'Pet cat again')",
    whereAnd           : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` where `t`.`task` = 'Rob bank' and `t`.`done` = false",
    whereLTE           : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t` where `t`.`id` <= 13",
    whereNestedIn      : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t` where `t`.`task` in ('buy cake', 'rob bank') and (`t`.`id` < 100 or `t`.`done` = false)",
    whereNestedOr      : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t` where (`t`.`id` >= 50 or `t`.`id` <= 20) and `t`.`done` = true",
    join               : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t` inner join `list` as `l` on `t`.`list_id` = `l`.`id`",
    leftJoin           : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` left join `list` as `l` on `t`.`list_id` = `l`.`id`",
    customOnJoinSimple : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` left join `list` as `l` on `t`.`list_id` = `l`.`id`",
    customOnJoinComplex: "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` left join `list` as `l` on (`t`.`list_id` = `l`.`id` or `t`.`task` = `l`.`name`)",
    rightJoin          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` right join `list` as `l` on `t`.`list_id` = `l`.`id`",
    innerJoin          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` inner join `list` as `l` on `t`.`list_id` = `l`.`id`",
    leftOuterJoin      : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` left outer join `list` as `l` on `t`.`list_id` = `l`.`id`",
    rightOuterJoin     : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` right outer join `list` as `l` on `t`.`list_id` = `l`.`id`",
    outerJoin          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` outer join `list` as `l` on `t`.`list_id` = `l`.`id`",
    fullOuterJoin      : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` full outer join `list` as `l` on `t`.`list_id` = `l`.`id`",
    crossJoin          : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` cross join `list` as `l` on `t`.`list_id` = `l`.`id`",
    groupByOne         : "select `t`.`id` as `t.id`, `t`.`task` as `t.task` from `todo` as `t` group by `t`.`list`",
    groupByMultiple    : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done` from `todo` as `t` group by `t`.`list`, `t`.`done`",
    having             : "select count(`t`.`task`) as `tasks` from `todo` as `t` having `tasks` <= 13",
    havingGroupBy      : "select count(`t`.`task`) as `tasks` from `todo` as `t` where `t`.`id` >= 10 group by `t`.`done` having `tasks` <= 4",
    havingMultiple     : "select count(`t`.`task`) as `tasks` from `todo` as `t` group by `t`.`done` having `tasks` > 5 and `tasks` <= 100",
    havingALot         : "select `t`.`id` as `t.id`, `t`.`task` as `t.task`, `t`.`done` as `t.done`, sum(`t`.`id`) as `sum_id` from `todo` as `t` inner join `list` as `l` on `t`.`list_id` = `l`.`id` where `t`.`done` = false group by `t`.`id` having `sum_id` <= 200"
  },

  criteria: {
    withAlias               : 'select * from `delivery` as `d` where `d`.`id` = 6',
    withoutAlias            : 'select * from `delivery` as `d` where `id` = 6',
    customColumnWithAlias   : 'select * from `address` as `a` where `a`.`house_number` = 6',
    customColumnWithoutAlias: 'select * from `address` as `a` where `house_number` = 6',
    multipleOperators       : "select * from `address` as `a` where `street` like '%straat%' and `house_number` > 2 and `id` between 1 and 200 and `country` <> 'Imagination land'",
    defaultsIsNull          : 'select * from `address` as `a` where `street` is null',
    defaultsIsNotNull       : 'select * from `address` as `a` where `street` is not null',
    defaultsIn              : 'select * from `address` as `a` where `house_number` in (1, 2, 3, 7)',
    defaultsNotIn           : 'select * from `address` as `a` where `house_number` not in (1, 2, 3, 7)',
    defaultsNotInWithAlias  : 'select * from `address` as `a` where `a`.`house_number` not in (1, 2, 3, 7)',
    mental                  : "select * from `delivery` as `d` where `id` = 1337 and `a`.`country` = 'Netherlands' and `a`.`street` like '%street' and (`id` between 1 and 100 or `a`.`house_number` > 12 or (`id` between 100 and 500 and `role` not in ('guest', 'spectator') and (`role` = 'no idea' or (`id` not between 6 and 9 and `t`.`status` = 2 and `u`.`name` = 'Frank' and (`id` not in (5, 6, 7, 8) or `role` > 666)))))",
    sensible                : "select * from `delivery` as `d` where `id` = 1337 and `a`.`country` = 'Netherlands' and `a`.`street` like '%street' and (`t`.`status` = 1 or (`t`.`status` = 2 and `u`.`name` = 'Frank'))",
  }
};
