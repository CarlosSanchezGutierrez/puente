# Admin filters

Internal dashboards now support filters.

## Vocational dashboard

```txt
/admin/vocacional

Filters:

type=all|school|mentor|student
status=all|new|reviewed|contacted|scheduled|closed

Examples:

/admin/vocacional?type=school
/admin/vocacional?status=contacted
/admin/vocacional?type=mentor&status=new
Field services dashboard
/admin/servicios

Filters:

type=all|audiovisual|technical|both
status=all|new|reviewed|contacted|scheduled|closed
drone=all|yes|no

Examples:

/admin/servicios?type=technical
/admin/servicios?drone=yes
/admin/servicios?type=both&status=new&drone=yes
